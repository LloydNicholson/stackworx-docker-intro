# Intro to Docker and Kubernetes for the interns and newcomers

## Docker Commands
### Docker init, install and run from a Utility Container (IMPERATIVE approach)
---
#### cd into app directory
```bash
cd app
```

#### npm init
```bash
docker run \
    -it \
    --rm \
    -v $PWD:/app \
    --workdir /app \
    --name node-util \
    node:18-alpine3.16 \
    npm init
```

#### npm install
```bash
docker run \
    -it \
    --rm \
    -v $PWD:/app \
    --workdir /app \
    --name node-util \
    node:18-alpine3.16 \
    npm install
```

#### npm run start
```bash
docker run \
    -it \
    --rm \
    -v $PWD:/app \
    --workdir /app \ 
    --name node-util \ 
    --expose=8081 \
    -p 8081:8081 \
    node:18-alpine3.16 \
    npm run start
```

### Docker run app using Dockerfile (DECLARATIVE approach)
---

#### cd into app directory
```bash
cd app
```

#### Create Dockerfile
```bash
touch Dockerfile
```

#### Place this inside Dockerfile
```bash
FROM node:18

EXPOSE 8081

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

VOLUME [ "/app/node_modules" ]

CMD [ "npm" , "start" ]
```

#### Then run this command
```bash
docker build -t node-app .
docker run -it --rm -v $PWD:/app -v /app/node_modules -p 8081:8081 --name users-app node-app
```

## Kubernetes Commands
