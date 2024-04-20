# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

# Migrations

## Generate

`npm run typeorm migration:generate ./src/migration/[NAME]`

## Apply

`npm run typeorm migration:run`
