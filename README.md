This repository is implementation of rails tutorial in next.js

## run

```sh
$ docker-compose up
```
## initialize next.js

```sh
$ mkdir my-app
$ cd my-app
$ docker run --rm -v $(pwd):/usr/src/app -w /usr/src/app node:16.9.1-alpine3.13 yarn create next-app --typescript .
```
