# Base image
FROM node:16.14.2

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN yarn build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
