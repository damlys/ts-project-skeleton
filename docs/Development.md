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

## Manual version updating

Update `MINOR` version:

```console
$ npm version minor --git-tag-version=false --ignore-scripts
```

Update `MAJOR` version:

```console
$ npm version major --git-tag-version=false --ignore-scripts
```
