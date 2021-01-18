# TypeScript project skeleton

## Development

Local machine requirements:

```console
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

$ git --version
git version 2.17.1
```

Get access into registries:

```console
$ export NPM_TOKEN="..."

$ docker login --username="..." --password="..."
```

Copy or link example configuration file:

```console
$ cp ./.examples/docker-compose.override.yml ./docker-compose.override.yml
$ ln --symbolic ./.examples/docker-compose.override.yml ./docker-compose.override.yml
```

Install dependencies:

```console
$ npm install
```

Build image:

```console
$ npm run docker:build
```

Run containers:

```console
$ npm run docker:up
```

Give it a shot:

```console
$ docker-compose exec this bash -ce "
    npm run format
    npm run lint
    npm run test
  "
```

See container logs:

```console
$ docker-compose logs this
```

Enter container shell:

```console
$ docker-compose exec this bash
```

Destroy containers:

```console
$ npm run docker:down
```

## Delivery

Publish package:

```console
$ npm publish
```

Publish image:

```console
$ npm run docker:publish
```

## Deployment

There is no deployment procedure yet.
