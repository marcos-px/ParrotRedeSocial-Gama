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
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const read_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/read.user.usecase"));
const winston_logs_1 = __importDefault(require("../../../infrastructure/logs/winston.logs"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const log = (0, debug_1.default)('app:users-middleware');
class UsersMiddlerare {
    validateRequiredAccountBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.indexId !== undefined) {
                next();
            }
            else {
                res.status(400).send({ error: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.BODYFIELDS_NO });
            }
        });
    }
    validateUserExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield read_user_usecase_1.default.execute({
                indexId: Number(req.params.indexId)
            });
            if (users) {
                winston_logs_1.default.info([' Usuário encontrado: ', users]);
                next();
            }
            else {
                winston_logs_1.default.error(`Usuário ${req.params.indexId} não existe`);
                res.status(400).send({ error: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.USERSEXISTS_NO });
            }
        });
    }
    validateUserRepeated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let rId = req.body.indexId;
            const users = yield read_user_usecase_1.default.execute({
                indexId: rId
            });
            if (!users) {
                next();
            }
            else {
                res.status(400).send({ error: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.USERSREPEATED_YES });
            }
        });
    }
    compareSync(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = (_a = req.header(`Authorization`)) === null || _a === void 0 ? void 0 : _a.replace(`Bearer `, ``);
                if (!token) {
                    res.status(401).send({
                        message: constants_config_1.default.RETURN.MESSAGES.SENDS.KEYANDEMAILINVALID_YES
                    });
                }
                else {
                    const decoded = jsonwebtoken_1.default.verify(token, String(process.env.SECRET_KEY));
                    if (typeof decoded === 'string') {
                        res.status(401).send({
                            error: constants_config_1.default.AUTHENTICATOR.MESSAGES.ERROR.AUTHORIZATION_NO
                        });
                    }
                    else {
                        console.log(decoded.indexId);
                        next();
                    }
                }
            }
            catch (error) {
                res.status(401).send({ message: constants_config_1.default.RETURN.MESSAGES.SENDS.KEYANDEMAILINVALID_YES });
            }
        });
    }
    uploadFile() {
        return (0, multer_1.default)({
            storage: multer_1.default.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, path_1.default.resolve("uploads"));
                },
                filename: (req, file, cb) => [
                    cb(null, `${Date.now()}-${file.originalname.toLocaleLowerCase()}`)
                ]
            })
        });
    }
}
exports.default = new UsersMiddlerare();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9taWRkbGV3YXJlcy91c2Vycy5taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUUxQix1R0FBOEU7QUFDOUUseUdBQStFO0FBQy9FLDZGQUErRDtBQUMvRCxvREFBNEI7QUFDNUIsZ0RBQXdCO0FBRXhCLGdFQUErQjtBQUcvQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUzRCxNQUFNLGVBQWU7SUFDWCxpQ0FBaUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzNHLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUM7Z0JBQzNDLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQUs7Z0JBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsMEJBQWUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFBO2FBQ3pGO1FBQ0wsQ0FBQztLQUFBO0lBRUssa0JBQWtCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUM1RixNQUFNLEtBQUssR0FBRyxNQUFNLDJCQUFlLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3RDLENBQUMsQ0FBQztZQUNILElBQUcsS0FBSyxFQUFDO2dCQUNMLHNCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtnQkFDN0MsSUFBSSxFQUFFLENB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