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
exports.auth = exports.SECRET_KEY = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const users_repository_1 = require("../../repositories/users.repository");
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
exports.SECRET_KEY = 'sua-senha-aqui';
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: constants_config_1.default.AUTHENTICATOR.MESSAGES.ERROR.AUTHORIZATION_NO });
        }
        const authorizationModelProvider = token.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(token, exports.SECRET_KEY);
        const users = yield users_repository_1.UsersRepository.findOneBy({ decoded });
        next();
    }
    catch (err) {
        res.status(401).send({ message: constants_config_1.default.AUTHENTICATOR.MESSAGES.ERROR.AUTHORIZATION_NO });
    }
});
exports.auth = auth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvYXV0aC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUF1RDtBQUV2RCx5QkFBc0I7QUFDdEIsMEVBQXVGO0FBQ3ZGLHVHQUE4RTtBQUVqRSxRQUFBLFVBQVUsR0FBVyxnQkFBZ0IsQ0FBQztBQU01QyxNQUFNLElBQUksR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFOztJQUM1RSxJQUFJO1FBQ0gsTUFBTSxLQUFLLEdBQUcsTUFBQSxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQywwQ0FBRSxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLDBCQUFlLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFBO1NBQ3ZHO1FBRUEsTUFBTSwwQkFBMEIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpELE1BQU0sT0FBTyxHQUFHLHNCQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxrQkFBVSxDQUFDLENBQUM7UUFDOUMsTUFBTSxLQUFLLEdBQUcsTUFBTSxrQ0FBZSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7UUFFMUQsSUFBSSxFQUFFLENBQUM7S0FDUDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsMEJBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7S0FDakc7QUFDRixDQUFDLENBQUEsQ0FBQztBQWpCVyxRQUFBLElBQUksUUFpQmYifQ==