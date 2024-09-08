FROM node:22.8.0-alpine3.20 AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 3000
CMD npm run dev