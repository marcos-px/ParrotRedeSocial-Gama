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
const express_validation_1 = require("express-validation");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9taWRkbGV3YXJlcy91c2Vycy5taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUUxQix1R0FBOEU7QUFDOUUseUdBQStFO0FBQy9FLDZGQUErRDtBQUMvRCxvREFBNEI7QUFDNUIsZ0RBQXdCO0FBQ3hCLDJEQUFrRDtBQUNsRCxnRUFBK0I7QUFHL0IsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFM0QsTUFBTSxlQUFlO0lBQXJCO1FBNkVJLHlCQUFvQixHQUFHLElBQUEsNkJBQVEsRUFBQztZQUM1QixJQUFJLEVBQUUsd0JBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ2IsSUFBSSxFQUFFLHdCQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUM3QixLQUFLLEVBQUUsd0JBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RDLFNBQVMsRUFBRSx3QkFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDbEMsUUFBUSxFQUFFLHdCQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDeEMsS0FBSyxFQUFFLHdCQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO2FBRWpDLENBQUM7U0FDTCxDQUFDLENBQUE7UUFFRixlQUFVLEdBQUcsSUFBQSw2QkFBUSxFQUFDO1lBQ2xCLElBQUksRUFBRSx3QkFBRyxDQUFDLE1BQU0sQ0FBQztnQkFDYixLQUFLLEVBQUUsd0JBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RDLFFBQVEs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