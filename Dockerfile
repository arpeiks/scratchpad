FROM node:14

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]