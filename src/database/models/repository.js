const { sequelize } = require("./sequelize");
const { Model, DataTypes } = require("sequelize");

class Repository extends Model {}

Repository.init(
  {
    name: DataTypes.STRING,
    src_url: DataTypes.STRING,
    deployment_url: DataTypes.STRING,
    image: DataTypes.STRING,
    state: DataTypes.STRING,
    origin: DataTypes.STRING,
    visibility: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Repository",
  }
);

module.exports = { Repository };
