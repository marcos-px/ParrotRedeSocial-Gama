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
const debug_1 = __importDefault(require("debug"));
const list_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/list.user.usecase"));
const read_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/read.user.usecase"));
const create_users_usecase_1 = __importDefault(require("../../../domain/usecases/users/create.users.usecase"));
const update_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/update.user.usecase"));
const delete_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/delete.user.usecase"));
const log = (0, debug_1.default)('app:users-controller');
class UsersController {
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield list_user_usecase_1.default.execute();
            res.status(200).send(users);
        });
    }
    ;
    getUsersById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield read_user_usecase_1.default.execute({
                iduser: Number(req.params.iduser)
            });
            res.status(200).send(users);
        });
    }
    ;
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield create_users_usecase_1.default.execute(req.body);
            log(users);
            res.status(201).send(users);
        });
    }
    updateUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield update_user_usecase_1.default.execute(req.body);
            res.status(200).send(users);
        });
    }
    removeUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield delete_user_usecase_1.default.execute({
                iduser: Number(req.params.iduser)
            });
            res.status(204).send();
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9jb250cm9sbGVycy91c2Vycy5jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUF5QjtBQUV6Qix5R0FBK0U7QUFDL0UseUdBQStFO0FBQy9FLCtHQUFxRjtBQUNyRiw2R0FBbUY7QUFDbkYsNkdBQW1GO0FBRW5GLE1BQU0sR0FBRyxHQUFtQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTFELE1BQU0sZUFBZTtJQUNYLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN2RCxNQUFNLEtBQUssR0FBRyxNQUFNLDJCQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVRLFlBQVksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMxRCxNQUFNLEtBQUssR0FBRyxNQUFNLDJCQUFlLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3BDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUFBLENBQUM7SUFFSSxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsTUFBTSxLQUFLLEdBQUcsTUFBTSw4QkFBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pELEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNYLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCxNQUFNLEtBQUssR0FBRyxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0IsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUM1QixNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3BDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=