import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    define: {
        timestamps: false,
        freezeTableName: true
    },
    port: "3306"
});

export default db;