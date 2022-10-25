import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('posts', {
            idpost: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'idpost'
            },
            content: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
            iduser: {
                type: Sequelize.DataTypes.INTEGER,
                references:{
                  model: {
                      tableName: 'users'
                  },
                  key: 'iduser'
                }  
              },
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('posts');
    }
}