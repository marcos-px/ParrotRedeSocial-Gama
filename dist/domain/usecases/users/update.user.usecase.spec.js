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
const update_user_usecase_1 = __importDefault(require("./update.user.usecase"));
const create_users_usecase_1 = __importDefault(require("./create.users.usecase"));
test("Teste unitário ReadClientUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        "name": "Marcos Teixeira",
        "email": "marc@teixeira.com",
        "apartment": 23,
        "password": "1516sa",
        "photo": "http://dsjkhsdkljds.com"
    };
    yield create_users_usecase_1.default.execute(user);
    const user2 = {
        name: "Marcos",
        email: "kmlkmd@151",
        apartment: 152615,
        password: "51651@5165",
        photo: "www.log.img.com"
    };
    const user3 = {
        name: "Marcos",
        email: "kmlkmd@151",
        apartment: 156155,
        password: "51651@5165",
        photo: "www.log.img.com"
    };
    expect(yield update_user_usecase_1.default.execute(user2)).toMatchObject(user3);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLnVzZXIudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy91c2Vycy91cGRhdGUudXNlci51c2VjYXNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRkFBc0Q7QUFDdEQsa0ZBQXdEO0FBR3hELElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxHQUFRLEVBQUU7SUFFL0MsTUFBTSxJQUFJLEdBQWM7UUFFcEIsTUFBTSxFQUFDLGlCQUFpQjtRQUN4QixPQUFPLEVBQUMsbUJBQW1CO1FBQzNCLFdBQVcsRUFBQyxFQUFFO1FBQ2QsVUFBVSxFQUFFLFFBQVE7UUFDcEIsT0FBTyxFQUFDLHlCQUF5QjtLQUNwQyxDQUFBO0lBQ0wsTUFBTSw4QkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbkMsTUFBTSxLQUFLLEdBQWU7UUFDdEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUUsWUFBWTtRQUNuQixTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsWUFBWTtRQUN0QixLQUFLLEVBQUMsaUJBQWlCO0tBQzFCLENBQUE7SUFFRCxNQUFNLEtBQUssR0FBZTtRQUN0QixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxZQUFZO1FBQ25CLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLEtBQUssRUFBQyxpQkFBaUI7S0FDMUIsQ0FBQTtJQUVELE1BQU0sQ0FBQyxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN2RSxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=