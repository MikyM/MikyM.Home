# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

RUN npm install -g @angular/cli

RUN npm install -g yarn

RUN yarn build

RUN yarn run start --port 80 --host 0.0.0.0

# Expose port 80
EXPOSE 80