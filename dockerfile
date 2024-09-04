# Stage 1: Build the React app
FROM node:16-alpine AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the built app with a lightweight web server (nginx)
FROM nginx:alpine

# Copy built React app from the first stage to the nginx web root
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default nginx port
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
