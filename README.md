# Feathers-Next-App

> 

## About

This project uses [Feathers](http://feathersjs.com) for server and NextJS for client. Two open source web framework for building modern real-time applications and server site rending.

## Getting Started

### Not use docker:
1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/server; npm install
    cd path/to/client; npm install
    ```

3. Start your app

    ```
    cd path/to/server; npm run dev
    cd path/to/client; npm run dev:server
    ```
### Use docker:
1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Build docker to install your dependencies and tart your app

    ```
    cd root folder; docker-compose up --build (or docker-compose up -d)
    ```
3. Run app on port config in file docker
4. Accept container in docker:

    ```
    docker exec -it <container_id> /bin/sh
    ```

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).

## Note

- Telemetry Collect of NextJS: https://nextjs.org/telemetry
