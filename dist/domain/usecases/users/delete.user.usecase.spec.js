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
const delete_user_usecase_1 = __importDefault(require("./delete.user.usecase"));
test("Teste unitário DeleteUserUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        indexId: 0
    };
    expect(yield delete_user_usecase_1.default.execute(user)).toBeUndefined();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLnVzZXIudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy91c2Vycy9kZWxldGUudXNlci51c2VjYXNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRkFBc0Q7QUFFdEQsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQVEsRUFBRTtJQUMvQyxNQUFNLElBQUksR0FBRztRQUNULE9BQU8sRUFBQyxDQUFDO0tBQ1osQ0FBQTtJQUNELE1BQU0sQ0FBQyxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ2xFLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==