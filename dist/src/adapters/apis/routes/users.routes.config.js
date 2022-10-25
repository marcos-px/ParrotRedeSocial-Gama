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
        users_controllers_1.default.listUsers) // listar usuários,
            .post(users_controllers_1.default.createUser);
        this.app.route(`/users/:iduser`)
            .all(//auth,
        users_middlewares_1.default.validateUserExists) //valida se conta existe ou não
            .put(
        //auth,
        // usersMiddlewares.validateUserExists,
        users_controllers_1.default.updateUsers) //atualizar usuário
            .delete(
        //auth,
        users_middlewares_1.default.validateUserExists, users_controllers_1.default.removeUsers) //deletar usuário
            .get(
        //auth,
        users_controllers_1.default.getUsersById); //pegar conta por id
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL3JvdXRlcy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlGQUFnRTtBQUNoRSx5REFBeUQ7QUFDekQseUZBQWdFO0FBQ2hFLGlFQUE0RDtBQUU1RCxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFDOUMsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyxPQUFPO1FBQ1IsMkJBQWdCLENBQUMsU0FBUyxDQUM3QixDQUFDLG1CQUFtQjthQUNwQixJQUFJLENBQ0QsMkJBQWdCLENBQUMsVUFBVSxDQUM5QixDQUFBO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDL0IsR0FBRyxDQUFDLE9BQU87UUFDUiwyQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBLCtCQUErQjthQUN0RSxHQUFHO1FBQ0EsT0FBTztRQUNQLHVDQUF1QztRQUN2QywyQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQSxtQkFBbUI7YUFDbkQsTUFBTTtRQUNILE9BQU87UUFDUCwyQkFBZ0IsQ0FBQyxrQkFBa0IsRUFDbkMsMkJBQWdCLENBQUMsV0FBVyxDQUFDLENBQUEsaUJBQWlCO2FBQ2pELEdBQUc7UUFDQSxPQUFPO1FBQ1AsMkJBQWdCLENBQUMsWUFBWSxDQUM1QixDQUFDLENBQUEsb0JBQW9CO1FBRTFCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0NBQ0o7QUFoQ0QsZ0NBZ0NDIn0=