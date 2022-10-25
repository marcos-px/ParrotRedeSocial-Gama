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
const bcrypt_1 = __importDefault(require("bcrypt"));
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const read_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/read.user.usecase"));
const winston_logs_1 = __importDefault(require("../../../infrastructure/logs/winston.logs"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const express_validation_1 = require("express-validation");
const login_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/login.user.usecase"));
const log = (0, debug_1.default)('app:users-middleware');
class UsersMiddlerare {
    constructor() {
        this.ValidationCreateUser = (0, express_validation_1.validate)({
            body: express_validation_1.Joi.object({
                name: express_validation_1.Joi.string().required(),
                email: express_validation_1.Joi.string().email().required(),
                apartment: express_validation_1.Joi.number().required(),
                password: express_validation_1.Joi.string().min(8).required(),
                photo: express_validation_1.Joi.string().required(),
            })
        });
        this.loginValid = (0, express_validation_1.validate)({
            body: express_validation_1.Joi.object({
                email: express_validation_1.Joi.string().email().required(),
                password: express_validation_1.Joi.string().min(8).required(),
            })
        });
        this.updateCreateValid = (0, express_validation_1.validate)({
            body: express_validation_1.Joi.object({
                name: express_validation_1.Joi.string(),
                email: express_validation_1.Joi.string().email(),
                apartment: express_validation_1.Joi.number(),
                password: express_validation_1.Joi.string().min(8).regex(/[a-zA-Z0-9]{3,30}/),
                photo: express_validation_1.Joi.string(),
            })
        });
    }
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
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield login_user_usecase_1.default.execute(req.body);
            let compare = bcrypt_1.default.compareSync(req.body.password, users.password);
            if (compare) {
                winston_logs_1.default.info([" Senha comparada!"]);
                next();
            }
            else {
                winston_logs_1.default.error(['Senha inválida!']);
                res.status(401).send({ message: "Senha ou e-mail inválidos" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9taWRkbGV3YXJlcy91c2Vycy5taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQixvREFBMkI7QUFDM0IsdUdBQThFO0FBQzlFLHlHQUErRTtBQUMvRSw2RkFBK0Q7QUFDL0Qsb0RBQTRCO0FBQzVCLGdEQUF3QjtBQUN4QiwyREFBaUU7QUFHakUsMkdBQWlGO0FBRWpGLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sZUFBZTtJQUFyQjtRQTRESSx5QkFBb0IsR0FBRyxJQUFBLDZCQUFRLEVBQUM7WUFDNUIsSUFBSSxFQUFFLHdCQUFHLENBQUMsTUFBTSxDQUFDO2dCQUNiLElBQUksRUFBRSx3QkFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDN0IsS0FBSyxFQUFFLHdCQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUN0QyxTQUFTLEVBQUUsd0JBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xDLFFBQVEsRUFBRSx3QkFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3hDLEtBQUssRUFBRSx3QkFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTthQUVqQyxDQUFDO1NBQ0wsQ0FBQyxDQUFBO1FBRUYsZUFBVSxHQUFHLElBQUEsNkJBQVEsRUFBQztZQUNsQixJQUFJLEVBQUUsd0JBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLHdCQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFF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