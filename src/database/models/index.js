import { Sequelize } from "sequelize";
import ConfigJson from '../database.json';

const env = process.env.NODE_ENV || 'development';
export const sequelize = new Sequelize(ConfigJson[env]);
