import * as Sequelize from "sequelize";
import { MySqlDB } from "../mysql.DB";

export default MySqlDB.getInstance().createModel('post',{
    idpost:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    content: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
})