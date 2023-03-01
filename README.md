# Intro to Docker and Kubernetes for the interns and newcomers

## Docker Commands
### Docker init, install and run from utility container (IMPERATIVE approach)
---
#### cd into app directory
```bash
cd app
```

#### npm init - imperative
```bash
docker run \
    -it \
    --rm \
    -v $PWD/app:/app \
    --workdir /app \
    --name node-util \
    node:18-alpine3.16 \
    npm init
```

#### npm install - imperative
```bash
docker run \
    -it \
    --rm \
    -v $PWD/app:/app \
    --workdir /app \
    --name node-util \
    node:18-alpine3.16 \
    npm install
```

### Declarative way
```bash
cd utilities && \
touch Dockerfile
```

#### npm run start
```bash
docker run \
    -it \
    --rm \
    -v $PWD/app:/app \
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
FROM node:18-alpine3.16

WORKDIR /app
```

#### Then run this command
```bash
docker build -t node-util .
docker run --name docker-app node-util
```

## Kubernetes Commands
## Setup k8s
---
### Install Kubectl on MacOS
#### Intel chip
```bash
   curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
```

#### Silicon chip (M1, M2)
```bash
   curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"
```

OR

Use docker desktop to install Kubernetes


### create alias
### zsh
```bash
echo "alias k=kubectl" >> ~/.zshrc
```

### bash (Mac doesn't execute .bashrc automatically on session creation so it has to be .bash_profile)
```bash
echo "alias k=kubectl" >> ~/.bash_profile
```

### Merge configs that you have received via email
https://able8.medium.com/how-to-merge-multiple-kubeconfig-files-into-one-36fc987c2e2f

---
### Plugins
#### Krew plugin for `k ctx` and `k ns` shortcuts
```bash
  set -x; cd "$(mktemp -d)" &&
  OS="$(uname | tr '[:upper:]' '[:lower:]')" &&
  ARCH="$(uname -m | sed -e 's/x86_64/amd64/' -e 's/\(arm\)\(64\)\?.*/\1\2/' -e 's/aarch64$/arm64/')" &&
  KREW="krew-${OS}_${ARCH}" &&
  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/${KREW}.tar.gz" &&
  tar zxvf "${KREW}.tar.gz" &&
  ./"${KREW}" install krew
```

#### At this to `.bash_profile` or `.zshrc`
```bash
echo 'export PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"' >> ~/.bash_profile
```

#### Restart your terminal then run this
```bash
k krew plugin list
# get current context
k ctx
# get current namespace
k ns
```
