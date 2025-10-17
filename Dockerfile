FROM node:latest AS build
# Use a slim image for smaller size and more specific environment
# FROM node:20-alpine AS build 
WORKDIR /app
COPY package.json package-lock.json ./
# Install dependencies, creating node_modules for the Linux environment
RUN npm install
# Copy remaining source code
COPY . .
# Explicitly rebuild native dependencies (optional, but a good safeguard)
RUN npm rebuild
# Run the build
RUN npm run build
# The rest of your Dockerfile...
COPY ./out /app/out

FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]