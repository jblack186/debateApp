# Debate App Backend

## Tech stack
Node.js, Express, Prisma, Postgresql, Typescript, Docker

## Requirements
Need Docker installed https://docs.docker.com/get-docker/

https://www.prisma.io/docs/concepts/components/prisma-cli/installation
## Environment Variables

create .env file in /backend directory and copy .env.example contents

## Available Scripts

In the project /backend directory, you can run:

### `npm i`
download dependencies

### `npm run build`
will compile typescript files into /dist/src directory

### `npm start`
this will start the shell script /scripts/serve.sh - 
will crate a docker container and volume if it doesn't exist -
if it does exist it will start it.

will then start server on localhos:5500

### `prisma db push `
pushes the database schema 
