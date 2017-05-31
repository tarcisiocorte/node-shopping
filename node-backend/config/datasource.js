import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let database = null;

export default function (app) {
  if (!database) {
    const config = app.config;
    const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config.params
        );

    database = {
      sequelize,
      Sequelize,
      models: {},
    };

    database.models = loadModels(sequelize);

    sequelize.sync().done(() => database);
  }
  return database;
}