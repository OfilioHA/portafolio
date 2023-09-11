const { sequelize } = require("./sequelize");
const { Model, DataTypes } = require("sequelize");

class Repository extends Model {}

Repository.init(
  {
    visibilityId: DataTypes.INTEGER,
    visibilityType: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    origin: DataTypes.STRING,
    type: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: "Repository",
  }
);

module.exports = { Repository };
