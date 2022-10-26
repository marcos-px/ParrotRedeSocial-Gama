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
            .get(//auth,
        users_controllers_1.default.listUsers); // listar usuários,
        this.app.route(`/register`)
            .post(
        // usersMiddlewares.ValidationCreateUser,
        users_middlewares_1.default.validateUserRepeated, users_controllers_1.default.createUser);
        this.app.route(`/users/:indexId`)
            .all(//auth,
        users_middlewares_1.default.validateUserExists) //valida se conta existe ou não
            .put(
        //auth,
        users_middlewares_1.default.validateUserExists, users_controllers_1.default.updateUsers) //atualizar usuário
            .delete(
        //auth,
        users_middlewares_1.default.validateUserExists, users_controllers_1.default.removeUsers) //deletar usuário
            .get(
        //auth,
        users_controllers_1.default.getUsersById); //pegar conta por id
        this.app.route(`/login`)
            .post(
        // usersMiddlewares.loginValid,
        users_controllers_1.default.loginBy);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3VzZXJzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5RkFBZ0U7QUFDaEUseURBQXlEO0FBQ3pELHlGQUFnRTtBQUNoRSxpRUFBNEQ7QUFFNUQsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBQzlDLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHLENBQUMsT0FBTztRQUNSLDJCQUFnQixDQUFDLFNBQVMsQ0FDN0IsQ0FBQSxDQUFDLG1CQUFtQjtRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDMUIsSUFBSTtRQUNELHlDQUF5QztRQUN6QywyQkFBZ0IsQ0FBQyxvQkFBb0IsRUFDckMsMkJBQWdCLENBQUMsVUFBVSxDQUM5QixDQUFBO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7YUFDaEMsR0FBRyxDQUFDLE9BQU87UUFDUiwyQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBLCtCQUErQjthQUN0RSxHQUFHO1FBQ0EsT0FBTztRQUNQLDJCQUFnQixDQUFDLGtCQUFrQixFQUNuQywyQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQSxtQkFBbUI7YUFDbkQsTUFBTTtRQUNILE9BQU87UUFDUCwyQkFBZ0IsQ0FBQyxrQkFBa0IsRUFDbkMsMkJBQWdCLENBQUMsV0FBVyxDQUFDLENBQUEsaUJBQWlCO2FBQ2pELEdBQUc7UUFDQSxPQUFPO1FBQ1AsMkJBQWdCLENBQUMsWUFBWSxDQUM1QixDQUFDLENBQUEsb0JBQW9CO1FBRTFCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNuQixJQUFJO1FBQ0QsK0JBQStCO1FBQy9CLDJCQUFnQixDQUFDLE9BQU8sQ0FFM0IsQ0FBQTtRQUNMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0NBQ0o7QUF6Q0QsZ0NBeUNDIn0=