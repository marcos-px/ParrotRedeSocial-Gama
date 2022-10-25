"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('post', [
            {
                "idpost": 1,
                "content": "Se contente com o content que está aqui :-)!",
                "iduser": 1
            },
            {
                "idpost": 2,
                "content": "Se contente com o content que está aqui :-)!",
                "iduser": 2
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('post', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi1wb3N0cy5zZWVkZXJzLm15c3FsLkRCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL3NlZWRlcnMvMi1wb3N0cy5zZWVkZXJzLm15c3FsLkRCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0JBQWU7SUFDWCxFQUFFLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDN0MsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQztZQUNwQztnQkFDSSxRQUFRLEVBQUMsQ0FBQztnQkFDVixTQUFTLEVBQUMsOENBQThDO2dCQUN4RCxRQUFRLEVBQUMsQ0FBQzthQUFFO1lBQ2hCO2dCQUNJLFFBQVEsRUFBQyxDQUFDO2dCQUNWLFNBQVMsRUFBQyw4Q0FBOEM7Z0JBQ3hELFFBQVEsRUFBQyxDQUFDO2FBQ2I7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsY0FBd0MsRUFBQyxFQUFFO1FBQzlDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDL0MsQ0FBQztDQUNKLENBQUEifQ==