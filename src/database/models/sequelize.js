const ConfigJson = require("../database.json");
const { Sequelize } = require("sequelize");

const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(ConfigJson[env]);

module.exports = { sequelize }