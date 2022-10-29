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
const users_repository_1 = require("../../../adapters/repositories/users.repository");
const create_users_usecase_1 = __importDefault(require("./create.users.usecase"));
jest.mock("../../../adapters/repositories/users.repository");
const UsersRepositoryMock = users_repository_1.UsersRepository;
test("Teste unitário createUserUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = new UsersRepositoryMock();
    userRepository.create.mockRejectedValue({
        "name": "Marcos Teixeira",
        "email": "marc@teixeira.com",
        "apartment": 23,
        "password": "1516sa",
        "photo": "http://dsjkhsdkljds.com"
    });
    const user = {
        name: "Marcos",
        email: "kmlkmd@151",
        apartment: 15615,
        password: "51651@5165",
        photo: "www.log.img.com"
    };
    expect(yield create_users_usecase_1.default.execute(user)).toMatchObject(user);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLnVzZXJzLnVzZWNhc2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb21haW4vdXNlY2FzZXMvdXNlcnMvY3JlYXRlLnVzZXJzLnVzZWNhc2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHNGQUFnRjtBQUNoRixrRkFBd0Q7QUFFeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBRTdELE1BQU0sbUJBQW1CLEdBQUcsa0NBQTZDLENBQUE7QUFFekUsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQVEsRUFBRTtJQUUvQyxNQUFNLGNBQWMsR0FBRyxJQUFJLG1CQUFtQixFQUFrQyxDQUFDO0lBQ2pGLGNBQWMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDcEMsTUFBTSxFQUFDLGlCQUFpQjtRQUN4QixPQUFPLEVBQUMsbUJBQW1CO1FBQzNCLFdBQVcsRUFBQyxFQUFFO1FBQ2QsVUFBVSxFQUFFLFFBQVE7UUFDcEIsT0FBTyxFQUFDLHlCQUF5QjtLQUNwQyxDQUFDLENBQUE7SUFFRixNQUFNLElBQUksR0FBZTtRQUVyQixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxZQUFZO1FBQ25CLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLEtBQUssRUFBQyxpQkFBaUI7S0FDMUIsQ0FBQTtJQUVELE1BQU0sQ0FBQyxNQUFNLDhCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0RSxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=