"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
// import { auth } from "../middlewares/auth.middleware";
const users_middlewares_1 = __importDefault(require("../middlewares/users.middlewares"));
const common_routes_config_1 = require("./common.routes.config");
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route(`/users`)
            .get(
        // usersMiddlewares.compareSync,
        users_controllers_1.default.listUsers); // listar usuários,
        this.app.route(`/register`)
            .post(users_middlewares_1.default.validateUserRepeated, users_controllers_1.default.createUser);
        this.app.route(`/users/:indexId`)
            .all(users_middlewares_1.default.validateUserExists) //valida se conta existe ou não
            .put(users_middlewares_1.default.compareSync, users_middlewares_1.default.validateUserExists, users_controllers_1.default.updateUsers) //atualizar usuário
            .delete(users_middlewares_1.default.compareSync, users_middlewares_1.default.validateUserExists, users_controllers_1.default.removeUsers) //deletar usuário
            .get(users_middlewares_1.default.compareSync, users_controllers_1.default.getUsersById); //pegar conta por id
        this.app.route(`/login`)
            .post(users_controllers_1.default.loginBy);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3VzZXJzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5RkFBZ0U7QUFDaEUseURBQXlEO0FBQ3pELHlGQUFnRTtBQUNoRSxpRUFBNEQ7QUFFNUQsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBQzlDLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHO1FBQ0EsZ0NBQWdDO1FBQ2hDLDJCQUFnQixDQUFDLFNBQVMsQ0FDN0IsQ0FBQSxDQUFDLG1CQUFtQjtRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDMUIsSUFBSSxDQUNELDJCQUFnQixDQUFDLG9CQUFvQixFQUNyQywyQkFBZ0IsQ0FBQyxVQUFVLENBQzlCLENBQUE7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzthQUNoQyxHQUFHLENBQ0EsMkJBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQSwrQkFBK0I7YUFDdEUsR0FBRyxDQUNBLDJCQUFnQixDQUFDLFdBQVcsRUFDNUIsMkJBQWdCLENBQUMsa0JBQWtCLEVBQ25DLDJCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFBLG1CQUFtQjthQUNuRCxNQUFNLENBQ0gsMkJBQWdCLENBQUMsV0FBVyxFQUM1QiwyQkFBZ0IsQ0FBQyxrQkFBa0IsRUFDbkMsMkJBQWdCLENBQUMsV0FBVyxDQUFDLENBQUEsaUJBQWlCO2FBQ2pELEdBQUcsQ0FDQSwyQkFBZ0IsQ0FBQyxXQUFXLEVBQzVCLDJCQUFnQixDQUFDLFlBQVksQ0FDNUIsQ0FBQyxDQUFBLG9CQUFvQjtRQUUxQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDbkIsSUFBSSxDQUNELDJCQUFnQixDQUFDLE9BQU8sQ0FFM0IsQ0FBQTtRQUNMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0NBQ0o7QUF4Q0QsZ0NBd0NDIn0=