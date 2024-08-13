# Stage 1: Build Stage
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if needed)
# RUN npm run build # Uncomment if you have a build step

# Stage 2: Production Stage
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy the necessary files from the build stage
COPY --from=build /app /app

# Expose the port the app runs on
EXPOSE 5001

# Command to run the application
CMD ["node", "index.js"]
