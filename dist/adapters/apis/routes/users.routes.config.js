"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const users_middlewares_1 = __importDefault(require("../middlewares/users.middlewares"));
const common_routes_config_1 = require("./common.routes.config");
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AccountsRoutes');
    }
    configureRoutes() {
        this.app.route(`/user`)
            .post(users_controllers_1.default.createUser); // listar usuários
        this.app.route(`/users`)
            .get(//auth,
        users_controllers_1.default.listUsers); // listar usuários
        this.app.route(`/user/:idUser`)
            .all(auth_middleware_1.auth, users_middlewares_1.default.validateUserExists) //valida se conta existe ou não
            .put(auth_middleware_1.auth, users_middlewares_1.default.validateRequiredAccountBodyFields, users_controllers_1.default.updateUsers) //atualizar usuário
            .delete(auth_middleware_1.auth, users_middlewares_1.default.validateUserExists, users_controllers_1.default.removeUsers) //deletar usuário
            .get(auth_middleware_1.auth, users_controllers_1.default.getUsersById); //pegar conta por id
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL3JvdXRlcy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlGQUFnRTtBQUNoRSxvRUFBc0Q7QUFDdEQseUZBQWdFO0FBQ2hFLGlFQUE0RDtBQUU1RCxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFDOUMsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDdEIsSUFBSSxDQUNELDJCQUFnQixDQUFDLFVBQVUsQ0FDOUIsQ0FBQSxDQUFDLGtCQUFrQjtRQUVwQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRyxDQUFDLE9BQU87UUFDUiwyQkFBZ0IsQ0FBQyxTQUFTLENBQzdCLENBQUEsQ0FBQyxrQkFBa0I7UUFFcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2FBQzlCLEdBQUcsQ0FBQyxzQkFBSSxFQUNMLDJCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUEsK0JBQStCO2FBQ3RFLEdBQUcsQ0FDQSxzQkFBSSxFQUNKLDJCQUFnQixDQUFDLGlDQUFpQyxFQUNsRCwyQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQSxtQkFBbUI7YUFDbkQsTUFBTSxDQUNILHNCQUFJLEVBQ0osMkJBQWdCLENBQUMsa0JBQWtCLEVBQ25DLDJCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFBLGlCQUFpQjthQUNqRCxHQUFHLENBQ0Esc0JBQUksRUFDSiwyQkFBZ0IsQ0FBQyxZQUFZLENBQzVCLENBQUMsQ0FBQSxvQkFBb0I7UUFFMUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ25CLENBQUM7Q0FDSjtBQWxDRCxnQ0FrQ0MifQ==