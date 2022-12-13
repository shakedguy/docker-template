## Dockerize python and nodejs application

This is a simple example of how to dockerize a python and nodejs application.

### Requirements

- [Docker](https://docs.docker.com/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Docker Machine](https://docs.docker.com/machine/install-machine/)
- [Python](https://www.python.org/downloads/)
- [Nodejs](https://nodejs.org/en/download/)
- [Npm](https://www.npmjs.com/get-npm)
- [yarn](https://yarnpkg.com/en/docs/install)
- [virtualenv](https://virtualenv.pypa.io/en/stable/installation/)

### Usage

- Clone this repository

- Build the docker image

  ```
  docker build -t dockerize-python-nodejs .
  ```

- Run the docker image

  ```
    docker run -it --rm dockerize-python-nodejs
  ```
