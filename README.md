## Description

API to manage messages in a chat system.
Built with NestJs

## Installation

```bash
$ npm install
```
## Before running localy

```bash
# .env config
$ create .env file based on .env.sample and setup variables

# start database (docker required)
$ npm run start:dev:deps

# build aplication
$ npm run build

# run migrations
$ npm run migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
