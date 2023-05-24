# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install the application dependencies inside the container
RUN npm install

# Bundle the application source code inside the Docker container
COPY . .

# Expose the port the app runs on
EXPOSE 9000

# Define the command to run the application
CMD [ "npm","run", "dev" ]
