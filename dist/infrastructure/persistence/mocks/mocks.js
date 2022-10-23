"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_users_usecase_1 = __importDefault(require("../../../domain/usecases/users/create.users.usecase"));
const faker_mocks_1 = __importDefault(require("./faker.mocks"));
class Mocks {
    constructor(mocksGenerator) {
        this._users = mocksGenerator.getUsers();
    }
    createUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            let countUsers = 0;
            for (countUsers = 0; countUsers < this._users.length; countUsers++) {
                yield create_users_usecase_1.default.execute(this._users[countUsers]);
            }
            return {
                createdUsers: countUsers
            };
        });
    }
}
const mocks = new Mocks(new faker_mocks_1.default);
mocks.createUsers().then((result) => {
    console.log(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbW9ja3MvbW9ja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrR0FBcUY7QUFDckYsZ0VBQXVDO0FBR3ZDLE1BQU0sS0FBSztJQUdQLFlBQVksY0FBc0I7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVLLFdBQVc7O1lBQ2IsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUM7Z0JBQzlELE1BQU0sOEJBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUM3RDtZQUNELE9BQU87Z0JBQ0gsWUFBWSxFQUFFLFVBQVU7YUFDM0IsQ0FBQztRQUNOLENBQUM7S0FBQTtDQUNKO0FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxxQkFBVSxDQUFDLENBQUM7QUFFeEMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDLENBQUMifQ==