## nodedock-example
### Simple nodejs example using [nodedock](https://github.com/siyangbi/nodedock)

This example demonstrates how to setup a simple node mysql development environment. 

# Nodedock
Nodedock is a Docker nodejs development environment. It facilitates running **nodejs** Apps on **Docker**. 


## Installation


1 - Clone this repository:

2 - Init and Update submodule
```
git submodule update --init --recursive
```
If you want to update to latest nodedock
```
git submodule update --recursive --remote
```

3 - Install dependencies

```
npm install
```

4 - Run your docker-compose command inside nodedock folder

```
docker-compose up 
```

5 - check if the server is responding

```
curl 127.0.0.1:3000
```
