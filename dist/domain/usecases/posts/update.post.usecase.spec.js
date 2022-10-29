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
const create_post_usecase_1 = __importDefault(require("./create.post.usecase"));
const update_post_usecase_1 = __importDefault(require("./update.post.usecase"));
test("Teste unitário UpdateClientUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const post = {
        "content": "Um post bem legal",
        iduser: 1,
    };
    yield create_post_usecase_1.default.execute(post);
    const post2 = {
        "content": "Um post bem legal",
        iduser: 1,
    };
    const post3 = {
        "content": "Um post bem legal",
        iduser: 1,
    };
    expect(yield update_post_usecase_1.default.execute(post2)).toMatchObject(post3);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLnBvc3QudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9wb3N0cy91cGRhdGUucG9zdC51c2VjYXNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRkFBc0Q7QUFDdEQsZ0ZBQXNEO0FBR3RELElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxHQUFRLEVBQUU7SUFFakQsTUFBTSxJQUFJLEdBQWM7UUFFcEIsU0FBUyxFQUFDLG1CQUFtQjtRQUM3QixNQUFNLEVBQUMsQ0FBQztLQUNYLENBQUE7SUFDTCxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVsQyxNQUFNLEtBQUssR0FBZTtRQUN0QixTQUFTLEVBQUMsbUJBQW1CO1FBQzdCLE1BQU0sRUFBQyxDQUFDO0tBQ1gsQ0FBQTtJQUVELE1BQU0sS0FBSyxHQUFlO1FBQ3RCLFNBQVMsRUFBQyxtQkFBbUI7UUFDN0IsTUFBTSxFQUFDLENBQUM7S0FDWCxDQUFBO0lBRUQsTUFBTSxDQUFDLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3ZFLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==