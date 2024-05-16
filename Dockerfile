# Use a Node.js base image
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application on port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:dev"]
