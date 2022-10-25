import *as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('user2',[
            {
                "iduser":1,
                "name": "John",
                "email": "john@gmail.com",
                "apartment":13,
                "password": "6516sa",
                "photo":"https://img.freepik.com/psd-gratuitas/ilustracao-de-zumbi-com-corpo-de-esqueleto_734784-8.jpg?w=740&t=st=1666715764~exp=1666716364~hmac=05c99675e0afb866495f85c0421a763ac2bf0325bbc0f80fbdacaa40d0751ce6"
            },
            {
                "iduser":2,
                "name": "John",
                "email": "john@gmail.com",
                "apartment":13,
                "password": "6516sa",
                "photo":"https://img.freepik.com/psd-gratuitas/ilustracao-de-maca-caramelada-colorida_734784-26.jpg?w=740&t=st=1666715801~exp=1666716401~hmac=bd31bbdc2f97b622458657c3b177cb4e8085a95870872d35388ee6f91e39d1cb"
           
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface)=>{
        return queryInterface.bulkDelete('user2',{})
    }
}