import { sequelize } from "./index";
import { Model, DataTypes } from "sequelize";

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

export { Repository };
