const config = require("./index");

module.exports = {
  development: {
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    port: config.DB_PORT,
    dialectOptions: {
      useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: true,
    },
    timezone: "+07:00", //for writing to database
  },
  production: {
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    // operatorsAliases: false,
    port: config.DB_PORT,
    dialectOptions: {
      useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: true,
    },
    timezone: "+07:00", //for writing to database
  },
};
