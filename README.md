# Intro to Docker and Kubernetes for the interns and newcomers

## Docker Commands
### Docker run utility container from command line (IMPERATIVE approach)

#### npm init
```bash
docker run -it --rm -v $PWD:/app --workdir /app --name node-util node:18-alpine3.16 npm init
```

#### npm install
```bash
docker run -it --rm -v $PWD:/app --workdir /app --name node-util node:18-alpine3.16 npm install
```

### Docker run utility container from command line (DECLARATIVE approach)
#### Create Dockerfile
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


## Kubernetes Commands
# TODO next