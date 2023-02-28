FROM node:18

EXPOSE 8081

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# VOLUME [ "/app/node_modules" ]

CMD [ "npm" , "start" ]