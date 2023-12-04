# Step 1: Build the Vue.js application
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm run build

# Step 2: Serve the application using Nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
# EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]