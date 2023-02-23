# Intro to Docker and Kubernetes for the interns and newcomers

## Commands used in this intro
### Docker run utility container from command line (IMPERATIVE approach)

#### npm init
```bash
docker run -it -v $PWD/app:/app --workdir /app --name node-util node:18-alpine3.16 npm init
```

#### npm install
```bash
docker run -it -v $PWD/app/node_modules:/app/node_modules --workdir /app node-util npm install
```

### Docker run utility container from command line (DECLARATIVE approach)
#### Create Dockerfile first then
```bash
touch Dockerfile
```

#### Place this inside Dockerfile
```bash
FROM node:18-alpine3.16

WORKDIR /app
```

#### Then run this command
```bash
docker build -t node-util .
docker run --name docker-app node-util
```