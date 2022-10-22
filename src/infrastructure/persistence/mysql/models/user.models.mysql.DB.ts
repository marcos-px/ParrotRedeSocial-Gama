import * as Sequelize from "sequelize";
import { MySqlDB } from "../mysql.db";

export default MySqlDB.getInstance().createModel('user',{
    iduser:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    nome: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    apartment: Sequelize.DataTypes.INTEGER,
    password: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
})