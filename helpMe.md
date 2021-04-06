# Add PostgreSQL: `yarn add pg pg-histore` => install pg and pg-histore

## Commands
### create a migration: `yarn sequelize migration:create --name=create-${name}`
### run migration from `./src/app/database/migrations` : `yarn sequelize db:migrate`
### delete migration: `yarn sequelize db:migrate:undo:${name}`
### delete all migrations: `yarn sequelize db:migrate:undo:all`

## Summary
### initialize server: `./src/server.js`
### routes: `./src/routes.js`
### file containing the middlewares and the import of the routes: `./src/app.js`
### database config: `./src/config/database.js`
### controllers: `./src/app/controllers`
### models: `./src/app/models`
### database connection with the models: `./src/app/database/index.js`
### migrations: `./src/app/database/migrations`
