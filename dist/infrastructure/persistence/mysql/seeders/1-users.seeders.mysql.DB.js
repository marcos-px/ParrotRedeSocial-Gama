"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('user2', [
            {
                "iduser": 1,
                "name": "John",
                "email": "john@gmail.com",
                "apartment": 13,
                "password": "6516sa",
                "photo": "https://img.freepik.com/psd-gratuitas/ilustracao-de-zumbi-com-corpo-de-esqueleto_734784-8.jpg?w=740&t=st=1666715764~exp=1666716364~hmac=05c99675e0afb866495f85c0421a763ac2bf0325bbc0f80fbdacaa40d0751ce6"
            },
            {
                "iduser": 2,
                "name": "John",
                "email": "john@gmail.com",
                "apartment": 13,
                "password": "6516sa",
                "photo": "https://img.freepik.com/psd-gratuitas/ilustracao-de-maca-caramelada-colorida_734784-26.jpg?w=740&t=st=1666715801~exp=1666716401~hmac=bd31bbdc2f97b622458657c3b177cb4e8085a95870872d35388ee6f91e39d1cb"
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('user2', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS11c2Vycy5zZWVkZXJzLm15c3FsLkRCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL3NlZWRlcnMvMS11c2Vycy5zZWVkZXJzLm15c3FsLkRCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0JBQWU7SUFDWCxFQUFFLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDN0MsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBQztZQUNyQztnQkFDSSxRQUFRLEVBQUMsQ0FBQztnQkFDVixNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixXQUFXLEVBQUMsRUFBRTtnQkFDZCxVQUFVLEVBQUUsUUFBUTtnQkFDcEIsT0FBTyxFQUFDLDBNQUEwTTthQUNyTjtZQUNEO2dCQUNJLFFBQVEsRUFBQyxDQUFDO2dCQUNWLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFdBQVcsRUFBQyxFQUFFO2dCQUNkLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixPQUFPLEVBQUMsdU1BQXVNO2FBRWxOO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLGNBQXdDLEVBQUMsRUFBRTtRQUM5QyxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2hELENBQUM7Q0FDSixDQUFBIn0=