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
const log = (0, debug_1.default)('app:users-middleware');
class UsersMiddlerare {
    validateRequiredAccountBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.iduser !== undefined) {
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
                iduser: Number(req.params.iduser)
            });
            if (users) {
                winston_logs_1.default.info([' Usuário encontrado: ', users]);
                next();
            }
            else {
                winston_logs_1.default.error(`Usuário ${req.params.iduser} não existe`);
                res.status(400).send({ error: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.USERSEXISTS_NO });
            }
        });
    }
    validateUserRepeated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let rId = req.body.iduser;
            const users = yield read_user_usecase_1.default.execute({
                iduser: rId
            });
            if (!users) {
                next();
            }
            else {
                res.status(400).send({ error: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.USERSREPEATED_YES });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9taWRkbGV3YXJlcy91c2Vycy5taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUUxQix1R0FBOEU7QUFDOUUseUdBQStFO0FBQy9FLDZGQUErRDtBQUMvRCxvREFBNEI7QUFDNUIsZ0RBQXdCO0FBR3hCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sZUFBZTtJQUNYLGlDQUFpQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDM0csSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBQztnQkFDMUMsSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBSztnQkFDRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSwwQkFBZSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUE7YUFDekY7UUFDTCxDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzVGLE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1lBQ0gsSUFBRyxLQUFLLEVBQUM7Z0JBQ0wsc0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO2dCQUM3QyxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFLO2dCQUNGLHNCQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxDQUFBO2dCQUN2RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSwwQkFBZSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBQyxDQUFDLENBQUE7YUFDMUY7UUFDTCxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzlGLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xDLE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLE1BQU0sRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDO1lBQ0gsSUFBRyxDQUFDLEtBQUssRUFBQztnQkFDTixJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFLO2dCQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLDBCQUFlLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxDQUFBO2FBQzdGO1FBQ0wsQ0FBQztLQUFBO0lBRUQsVUFBVTtRQUNOLE9BQU8sSUFBQSxnQkFBTSxFQUFDO1lBQ1YsT0FBTyxFQUFFLGdCQUFNLENBQUMsV0FBVyxDQUFDO2dCQUN4QixXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxFQUFFO29CQUMxQixFQUFFLENBQUMsSUFBSSxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFDRCxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUE7b0JBQ3ZCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUM7aUJBQ3JFO2FBQ0osQ0FBQztTQUNMLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==