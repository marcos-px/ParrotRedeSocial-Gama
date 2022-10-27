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
const users_repository_1 = __importDefault(require("../../../adapters/repositories/users.repository"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginUserUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._repository.readByWhere(data.email, data.password);
            if (user) {
                const token = jsonwebtoken_1.default.sign(user, String(process.env.SECRET_KEY), {
                    expiresIn: `2 days`
                });
                return {
                    user: user,
                    token: token
                };
            }
            return;
        });
    }
}
exports.default = new LoginUserUseCase(users_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4udXNlci51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy91c2Vycy9sb2dpbi51c2VyLnVzZWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSx1R0FBK0U7QUFDL0UsZ0VBQWdDO0FBRWhDLE1BQU0sZ0JBQWdCO0lBQ2xCLFlBQW9CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUVqRCxDQUFDO0lBRUssT0FBTyxDQUFDLElBQXVDOztZQUNqRCxNQUFNLElBQUksR0FBSSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBRXZFLElBQUcsSUFBSSxFQUFDO2dCQUVSLE1BQU0sS0FBSyxHQUFHLHNCQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDekQsU0FBUyxFQUFFLFFBQVE7aUJBQ3RCLENBQUMsQ0FBQztnQkFFSCxPQUFPO29CQUVQLElBQUksRUFBRSxJQUFJO29CQUNWLEtBQUssRUFBRSxLQUFLO2lCQUFDLENBQUE7YUFDaEI7WUFDRyxPQUFNO1FBQ2QsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGdCQUFnQixDQUMvQiwwQkFBZSxDQUNsQixDQUFBIn0=