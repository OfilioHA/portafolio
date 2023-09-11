const { sequelize } = require("./sequelize");
const { Model, DataTypes } = require("sequelize");

class Repository extends Model {}

Repository.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Repository",
  }
);

module.exports =  { Repository };
