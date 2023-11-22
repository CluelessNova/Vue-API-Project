terraform {
  cloud {
    organization = "portolfio"

    workspaces {
      name = "portfolio-frontend"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = var.awsRegion
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.portfolio_frontend_vpc.id

  tags = {
    Name = "${var.name}-igw"
  }
}

resource "aws_route" "internet_access" {
  route_table_id         = aws_vpc.portfolio_frontend_vpc.main_route_table_id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw.id
}

resource "aws_vpc" "portfolio_frontend_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "portfolio frontend vpc"
  }
}

data "aws_availability_zones" "available_zones" {
  state = "available"
}

resource "aws_subnet" "portfolio_frontend_subnet" {
  vpc_id                  = aws_vpc.portfolio_frontend_vpc.id
  cidr_block              = "10.0.0.0/24"
  availability_zone       = data.aws_availability_zones.available_zones.names[0]
  map_public_ip_on_launch = true

  tags = {
    Name = "portfolio subnet"
  }
}

resource "aws_subnet" "portfolio_frontend_subnet_2" {
  vpc_id                  = aws_vpc.portfolio_frontend_vpc.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = data.aws_availability_zones.available_zones.names[1]
  map_public_ip_on_launch = true

  tags = {
    Name = "portfolio subnet 2"
  }
}

resource "aws_security_group" "portfolio_frontend_security_group" {
  name        = "portfolio-ecs-security-group"
  description = "allow access to portfolio frontend"
  vpc_id      = aws_vpc.portfolio_frontend_vpc.id

  ingress {
    description = "http access"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "http access"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = -1
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "portfolio-ecs-security-group"
  }
}

resource "aws_ecs_cluster" "portfolio_frontend" {
  name = var.name
}

resource "aws_iam_role" "portfolio_frontend" {
  name = "${var.name}-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        },
      },
    ],
  })
}

resource "aws_iam_role_policy_attachment" "ecs_execution_role_policy" {
  role       = aws_iam_role.portfolio_frontend.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_ecs_task_definition" "portfolio_task" {
  family                   = var.name
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.portfolio_frontend.arn

  container_definitions = file("task_definition.json")
}

resource "aws_ecs_service" "portfolio_service" {
  name            = var.name
  cluster         = aws_ecs_cluster.portfolio_frontend.id
  task_definition = aws_ecs_task_definition.portfolio_task.arn
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = [aws_subnet.portfolio_frontend_subnet.id]
    security_groups  = [aws_security_group.portfolio_frontend_security_group.id]
    assign_public_ip = true
  }

  desired_count = 1

  load_balancer {
    target_group_arn = aws_lb_target_group.portfolio_frontend_tg.arn
    container_name   = var.name
    container_port   = 80
  }
}

resource "aws_lb" "portfolio_frontend_alb" {
  name               = "${var.name}-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.portfolio_frontend_security_group.id]
  subnets = [
    aws_subnet.portfolio_frontend_subnet.id,
    aws_subnet.portfolio_frontend_subnet_2.id
  ]

  enable_deletion_protection = false

  tags = {
    Name = "${var.name}-alb"
  }
}

resource "aws_lb_target_group" "portfolio_frontend_tg" {
  name        = "${var.name}-tg"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.portfolio_frontend_vpc.id
  target_type = "ip"

  health_check {
    enabled             = true
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 5
    path                = "/"
    protocol            = "HTTP"
    interval            = 30
    matcher             = "200"
  }

  tags = {
    Name = "${var.name}-tg"
  }
}

resource "aws_lb_listener" "portfolio_frontend_listener" {
  load_balancer_arn = aws_lb.portfolio_frontend_alb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.portfolio_frontend_tg.arn
  }
}

# resource "aws_lb_listener" "portfolio_frontend_https_listener" {
#   load_balancer_arn = aws_lb.portfolio_alb.arn
#   port              = 443
#   protocol          = "HTTPS"
#   ssl_policy        = "ELBSecurityPolicy-2016-08"
#   certificate_arn   = ""
#   default_action {
#     type             = "forward"
#     target_group_arn = aws_lb_target_group.portfolio_frontend_tg.arn
#   }
# }
