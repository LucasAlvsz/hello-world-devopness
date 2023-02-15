FROM node:18-alpine

WORKDIR /app
COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build

RUN mkdir -p /var/www/html
RUN mv dist/* /var/www/html

WORKDIR /
RUN rm -rf /app