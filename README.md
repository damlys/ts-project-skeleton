# TypeScript project skeleton

## Development

Local machine requirements:

```shell script
$ node --version
v14.15.4

$ npm --version
6.14.11

$ docker --version
Docker version 20.10.1, build 831ebea

$ docker-compose --version
docker-compose version 1.27.3, build unknown

$ docker run --rm hello-world
This message shows that your installation appears to be working correctly.
```

Get access into registries:

```shell script
$ export NPM_TOKEN="..."

$ docker login --username="damlys" --password="..."
```

Copy or link example configuration file:

```shell script
$ cp ./.examples/docker-compose.override.yml ./docker-compose.override.yml
$ ln --symbolic ./.examples/docker-compose.override.yml ./docker-compose.override.yml
```

Install dependencies:

```shell script
$ npm install
```

Build image:

```shell script
$ npm run docker:build
```

Run containers:

```shell script
$ npm run docker:up
```

Give it a shot:

```shell script
$ docker-compose exec ts-project-skeleton bash -ce "
    npm run format
    npm run lint
    npm run test
  "
```

See container logs:

```shell script
$ docker-compose logs ts-project-skeleton
```

Enter container shell:

```shell script
$ docker-compose exec ts-project-skeleton bash
```

## Delivery

Publish package:

```shell script
$ npm publish
```

Publish image:

```shell script
$ npm run docker:publish
```

## Deployment

There is no deployment procedure yet.
