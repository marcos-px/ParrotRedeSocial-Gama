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
const read_post_usecase_1 = __importDefault(require("./read.post.usecase"));
const create_post_usecase_1 = __importDefault(require("./create.post.usecase"));
test("Teste unitário ReadPostUseCase", () => __awaiter(void 0, void 0, void 0, function* () {
    const post = {
        "content": "Um post bem legal",
        iduser: 1,
    };
    yield create_post_usecase_1.default.execute(post);
    const post2 = {
        "content": "Um post bem legal",
        iduser: 1,
    };
    expect(yield read_post_usecase_1.default.execute({ idpost: 0 })).toMatchObject(post2);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC5wb3N0LnVzZWNhc2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb21haW4vdXNlY2FzZXMvcG9zdHMvcmVhZC5wb3N0LnVzZWNhc2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDRFQUFrRDtBQUNsRCxnRkFBc0Q7QUFFdEQsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLEdBQVEsRUFBRTtJQUU3QyxNQUFNLElBQUksR0FBYztRQUVwQixTQUFTLEVBQUMsbUJBQW1CO1FBQzdCLE1BQU0sRUFBQyxDQUFDO0tBQ1gsQ0FBQTtJQUNMLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWxDLE1BQU0sS0FBSyxHQUFlO1FBQ3RCLFNBQVMsRUFBQyxtQkFBbUI7UUFDN0IsTUFBTSxFQUFDLENBQUM7S0FDWCxDQUFBO0lBRUQsTUFBTSxDQUFDLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUMxRSxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=