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
const login_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/login.user.usecase"));
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
                indexId: Number(req.params.indexId)
            });
            try {
                if (users) {
                    res.status(200).send(users);
                }
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
            try {
                const users = yield create_users_usecase_1.default.execute(req.body);
                log(users);
                res.status(201).send(req.params.indexId);
            }
            catch (error) {
                console.error(error);
                res.status(400).send(error);
            }
        });
    }
    updateUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // let user = await readUserUsecase.execute({indexId: Number(req.params.indexId)})
            const user = yield update_user_usecase_1.default.execute(req.body);
            console.log("CONSOLE DO CONTROLLER");
            res.status(200).send(user);
        });
    }
    removeUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield delete_user_usecase_1.default.execute({
                indexId: Number(req.params.indexId)
            });
            res.status(204).send();
        });
    }
    loginBy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield login_user_usecase_1.default.execute(req.body);
            if (user) {
                res.status(200).send(user);
            }
            else {
                res.status(401).send({ error: constants_config_1.default.AUTHENTICATOR.MESSAGES.ERROR.LOGININCORRECT_YES }); //colocar co
            }
        });
    }
    createUserBulk(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let countUsers = 0;
            for (countUsers = 0; countUsers < req.body.fileData.length; countUsers++) {
                yield create_users_usecase_1.default.execute(req.body.fileData[countUsers]);
            }
            res.status(201).send({
                createdUsers: countUsers
            });
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9jb250cm9sbGVycy91c2Vycy5jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUF5QjtBQUV6Qix5R0FBK0U7QUFDL0UseUdBQStFO0FBQy9FLCtHQUFxRjtBQUNyRiw2R0FBbUY7QUFDbkYsNkdBQW1GO0FBQ25GLHVHQUE4RTtBQUM5RSwyR0FBaUY7QUFNakYsTUFBTSxHQUFHLEdBQW1CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFMUQsTUFBTSxlQUFlO0lBQ1gsU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3ZELE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRVEsWUFBWSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFELE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDdEMsQ0FBQyxDQUFDO1lBQ0gsSUFBSTtnQkFDQSxJQUFJLEtBQUssRUFBQztvQkFDTixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDL0I7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENB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