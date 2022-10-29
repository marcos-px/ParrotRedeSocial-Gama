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
const login_user_usecase_1 = __importDefault(require("./login.user.usecase"));
test("Teste unitário DeleteUserUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        email: "mdlskamlmk",
        password: "strinhghhhg55g"
    };
    expect(yield login_user_usecase_1.default.execute(user)).toBeUndefined();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4udXNlci51c2VjYXNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3VzZWNhc2VzL3VzZXJzL2xvZ2luLnVzZXIudXNlY2FzZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQW9EO0FBR3BELElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxHQUFRLEVBQUU7SUFDL0MsTUFBTSxJQUFJLEdBQUc7UUFDVCxLQUFLLEVBQUUsWUFBWTtRQUNuQixRQUFRLEVBQUUsZ0JBQWdCO0tBQUUsQ0FBQTtJQUVoQyxNQUFNLENBQUMsTUFBTSw0QkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=