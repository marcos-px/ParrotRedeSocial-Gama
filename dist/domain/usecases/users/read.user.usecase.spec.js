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
const read_user_usecase_1 = __importDefault(require("./read.user.usecase"));
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
        apartment: 15615,
        password: "51651@5165",
        photo: "www.log.img.com"
    };
    expect(yield read_user_usecase_1.default.execute({ indexId: 0 })).toMatchObject(user2);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC51c2VyLnVzZWNhc2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb21haW4vdXNlY2FzZXMvdXNlcnMvcmVhZC51c2VyLnVzZWNhc2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDRFQUFrRDtBQUNsRCxrRkFBd0Q7QUFHeEQsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQVEsRUFBRTtJQUUvQyxNQUFNLElBQUksR0FBYztRQUVwQixNQUFNLEVBQUMsaUJBQWlCO1FBQ3hCLE9BQU8sRUFBQyxtQkFBbUI7UUFDM0IsV0FBVyxFQUFDLEVBQUU7UUFDZCxVQUFVLEVBQUUsUUFBUTtRQUNwQixPQUFPLEVBQUMseUJBQXlCO0tBQ3BDLENBQUE7SUFDTCxNQUFNLDhCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVuQyxNQUFNLEtBQUssR0FBZTtRQUN0QixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxZQUFZO1FBQ25CLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLEtBQUssRUFBQyxpQkFBaUI7S0FDMUIsQ0FBQTtJQUVELE1BQU0sQ0FBQyxNQUFNLDJCQUFlLENBQUMsT0FBTyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDM0UsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9