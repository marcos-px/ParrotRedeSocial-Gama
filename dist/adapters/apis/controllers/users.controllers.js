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
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
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
            try {
                if (users) {
                    res.status(200).send(users);
                }
                return res.json(users);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ message: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.SERVIDORERROR_YES });
            }
        });
    }
    ;
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield create_users_usecase_1.default.execute(req.body);
            log(users);
            // let { name, email, apartment, password} = req.body
            // const keyHash = await bcrypt.hash(password,10);
            // password = keyHash
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9jb250cm9sbGVycy91c2Vycy5jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUF5QjtBQUV6Qix5R0FBK0U7QUFDL0UseUdBQStFO0FBQy9FLCtHQUFxRjtBQUNyRiw2R0FBbUY7QUFDbkYsNkdBQW1GO0FBRW5GLHVHQUE4RTtBQUU5RSxNQUFNLEdBQUcsR0FBbUIsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUxRCxNQUFNLGVBQWU7SUFDWCxTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDdkQsTUFBTSxLQUFLLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUFBLENBQUM7SUFFUSxZQUFZLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDMUQsTUFBTSxLQUFLLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE9BQU8sQ0FBQztnQkFDeEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNwQyxDQUFDLENBQUM7WUFDSCxJQUFJO2dCQUNBLElBQUksS0FBSyxFQUFDO29CQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMvQjtnQkFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDekI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLDBCQUFlLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxDQUFBO2FBQ3ZHO1FBQ0wsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVJLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RCxNQUFNLEtBQUssR0FBRyxNQUFNLDhCQUFrQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckQsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWYscURBQXFEO1lBQ3JELGtEQUFrRDtZQUNsRCxxQkFBcUI7WUFDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sS0FBSyxHQUFHLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMvQixDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDekQsTUFBTSw2QkFBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQzVCLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==