# Pull the Node image from Docker Hub
FROM node:14-slim

# Create a directory where our app will be placed
RUN mkdir -p /ui

# Change directory so that our commands run inside this new directory
WORKDIR /ui

# Copy dependency definitions
COPY package.json ./

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . .

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]