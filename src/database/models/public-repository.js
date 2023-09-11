const { sequelize } = require("./sequelize");
const { Model, DataTypes } = require("sequelize");

class PublicRepository extends Model {}

PublicRepository.init(
  {
    srcUrl: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "PublicRepository",
    timestamps: false,
  }
);

module.exports = { PublicRepository };
