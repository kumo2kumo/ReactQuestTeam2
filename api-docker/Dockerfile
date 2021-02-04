# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:14-alpine

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /usr/src/app

RUN npm install -g express-generator


EXPOSE 3333