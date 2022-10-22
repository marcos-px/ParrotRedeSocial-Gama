import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('users', {
            iduser: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'iduser',
                autoIncrement: true
            },
            nome: Sequelize.DataTypes.STRING,
            email: Sequelize.DataTypes.STRING,
            apartment: Sequelize.DataTypes.INTEGER,
            password: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('users');
    }
}