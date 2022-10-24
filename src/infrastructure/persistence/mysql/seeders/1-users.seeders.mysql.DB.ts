import *as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('users',[
            {
                "iduser":1,
                "name": "John",
                "email": "john@gmail.com",
                "apartment":13,
                "password": "6516sa",
                
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface)=>{
        return queryInterface.bulkDelete('users',{})
    }
}