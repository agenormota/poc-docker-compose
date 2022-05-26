
# Pull the Node image from Docker Hub
FROM node:16

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/api

# Copy dependency definitions
COPY package*.json ./

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . .

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]