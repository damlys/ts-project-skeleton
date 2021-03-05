# Development

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

Run tests and checks:

```console
$ docker-compose exec http_server bash -ce "
    npm run format
    npm run lint
    npm run test
  "
```

See container logs:

```console
$ docker-compose logs http_server
```

Enter container shell:

```console
$ docker-compose exec http_server bash
```

Destroy containers:

```console
$ npm run docker:down
```

## Versioning

Bump `MINOR` version:

```console
$ npm version preminor --ignore-scripts --git-tag-version=false
```

Bump `MAJOR` version:

```console
$ npm version premajor --ignore-scripts --git-tag-version=false
```
