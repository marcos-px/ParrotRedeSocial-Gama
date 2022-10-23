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
class ListUserUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.list();
        });
    }
}
exports.default = new ListUserUseCase(users_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC51c2VyLnVzZWNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3VzZWNhc2VzL3VzZXJzL2xpc3QudXNlci51c2VjYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUdBQW1HO0FBR25HLE1BQU0sZUFBZTtJQUNqQixZQUFvQixXQUE0QjtRQUE1QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFBRSxDQUFDO0lBQzdDLE9BQU87O1lBQ1QsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDeEMsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGVBQWUsQ0FDOUIsMEJBQWUsQ0FDbEIsQ0FBQSJ9