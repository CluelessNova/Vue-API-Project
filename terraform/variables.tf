variable "awsRegion" {
  description = "aws region"
  type        = string
  default     = "us-east-1"
}

variable "ecr_repository_url" {
  description = "aws ecr repsoitory"
  type        = string
  default     = "200903042756.dkr.ecr.us-east-1.amazonaws.com/portfolio-frontend:latest"
}

variable "name" {
  description = "name of task"
  type        = string
  default     = "portfolio-frontend"
}
