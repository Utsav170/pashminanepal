# Base image
FROM node:16.14.2

# Create app directory, in our container/in our image
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

# Install app dependencies
RUN yarn

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN yarn build

CMD [ "node", "dist/src/main.js" ]
