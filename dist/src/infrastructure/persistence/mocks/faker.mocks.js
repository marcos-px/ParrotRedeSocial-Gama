"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
class FakerMocks {
    getUsers() {
        let users = [];
        users = this.getUsers();
        return this.getUsers();
    }
    _getUsers() {
        const users = [];
        Array.from({ length: 10 }).forEach(() => {
            users.push({
                iduser: Number(faker_1.faker.finance.amount()),
                name: faker_1.faker.name.fullName(),
                email: String(faker_1.faker.internet.email),
                apartment: Number(faker_1.faker.finance.amount()),
                password: String(faker_1.faker.internet.password),
                photo: faker_1.faker.image.people()
            });
        });
        return users;
    }
}
exports.default = FakerMocks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZXIubW9ja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbW9ja3MvZmFrZXIubW9ja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyQ0FBdUM7QUFHdkMsTUFBcUIsVUFBVTtJQUMzQixRQUFRO1FBQ0osSUFBSSxLQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUMvQixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLE9BQVEsSUFBSSxDQUFDLFFBQVEsRUFBcUIsQ0FBQztJQUMvQyxDQUFDO0lBRU8sU0FBUztRQUNiLE1BQU0sS0FBSyxHQUFtQixFQUFFLENBQUM7UUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFFLEVBQUU7WUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDUCxNQUFNLEVBQUUsTUFBTSxDQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDbkMsU0FBUyxFQUFDLE1BQU0sQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4QyxRQUFRLEVBQUUsTUFBTSxDQUFDLGFBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUN6QyxLQUFLLEVBQUUsYUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7YUFDOUIsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBRUo7QUF0QkQsNkJBc0JDIn0=