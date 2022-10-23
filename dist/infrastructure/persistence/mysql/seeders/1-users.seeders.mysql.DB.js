"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('users', [
            {
                "iduser": 1,
                "name": "John",
                "email": "john@gmail.com",
                "apartment": 13,
                "password": "6516sa"
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('users', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS11c2Vycy5zZWVkZXJzLm15c3FsLkRCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL3NlZWRlcnMvMS11c2Vycy5zZWVkZXJzLm15c3FsLkRCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0JBQWU7SUFDWCxFQUFFLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDN0MsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBQztZQUNyQztnQkFDSSxRQUFRLEVBQUMsQ0FBQztnQkFDVixNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixXQUFXLEVBQUMsRUFBRTtnQkFDZCxVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUF3QyxFQUFDLEVBQUU7UUFDOUMsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0NBQ0osQ0FBQSJ9