import *as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('post',[
            {
                "idpost":1,
                "content":"Se contente com o content que está aqui :-)!",
                "iduser":1 },
            {
                "idpost":2,
                "content":"Se contente com o content que está aqui :-)!",
                "iduser":2
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface)=>{
        return queryInterface.bulkDelete('post',{})
    }
}