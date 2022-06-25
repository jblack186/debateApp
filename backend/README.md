# Getting Started with Create React App

https://www.prisma.io/docs/concepts/components/prisma-cli/installation

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
