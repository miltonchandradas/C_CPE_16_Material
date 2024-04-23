FROM node:21-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY server.js /usr/src/app
COPY package.json /usr/src/app
COPY products.json /usr/src/app

RUN npm install

EXPOSE 80 443 3000

CMD ["npm", "run", "start"]