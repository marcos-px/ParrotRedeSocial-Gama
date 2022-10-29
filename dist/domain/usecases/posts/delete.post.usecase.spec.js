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
const delete_post_usecase_1 = __importDefault(require("./delete.post.usecase"));
test("Teste unitário DeletePostUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const post = {
        idpost: 0
    };
    expect(yield delete_post_usecase_1.default.execute(post)).toBeUndefined();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLnBvc3QudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9wb3N0cy9kZWxldGUucG9zdC51c2VjYXNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRkFBc0Q7QUFFdEQsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQVEsRUFBRTtJQUMvQyxNQUFNLElBQUksR0FBRztRQUNULE1BQU0sRUFBQyxDQUFDO0tBQ1gsQ0FBQTtJQUNELE1BQU0sQ0FBQyxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ2xFLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==