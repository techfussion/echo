FROM node:23.11.1-alpine3.21 AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 3000
CMD npm run dev