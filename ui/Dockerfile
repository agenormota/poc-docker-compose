# Pull the Node image from Docker Hub
FROM node:16

# Create a directory where our app will be placed
RUN mkdir -p /ui

# Change directory so that our commands run inside this new directory
WORKDIR /ui

# Copy dependency definitions
COPY package.json /ui

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /ui

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]