import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('users', {
            idpost: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'iduser',
                autoIncrement: true
            },
            iduser: {
              type: Sequelize.DataTypes.INTEGER,
              references:{
                model: {
                    tableName: 'user'
                },
                key: 'iduser'
              }  
            },
            content: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('users');
    }
}