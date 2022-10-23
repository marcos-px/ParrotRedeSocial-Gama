"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
const users_middlewares_1 = __importDefault(require("../middlewares/users.middlewares"));
const common_routes_config_1 = require("./common.routes.config");
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AccountsRoutes');
    }
    configureRoutes() {
        this.app.route(`/user`)
            .post(users_controllers_1.default.createUser);
        this.app.route(`/users`)
            .get(//auth,
        users_controllers_1.default.listUsers); // listar usuários
        this.app.route(`/user/:iduser`)
            .all(//auth,
        users_middlewares_1.default.validateUserExists) //valida se conta existe ou não
            .put(
        //auth,
        users_middlewares_1.default.validateRequiredAccountBodyFields, users_controllers_1.default.updateUsers) //atualizar usuário
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL3JvdXRlcy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlGQUFnRTtBQUVoRSx5RkFBZ0U7QUFDaEUsaUVBQTREO0FBRTVELE1BQWEsVUFBVyxTQUFRLHlDQUFrQjtJQUM5QyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUN0QixJQUFJLENBQ0QsMkJBQWdCLENBQUMsVUFBVSxDQUM5QixDQUFBO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyxPQUFPO1FBQ1IsMkJBQWdCLENBQUMsU0FBUyxDQUM3QixDQUFBLENBQUMsa0JBQWtCO1FBRXBCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUM5QixHQUFHLENBQUMsT0FBTztRQUNSLDJCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUEsK0JBQStCO2FBQ3RFLEdBQUc7UUFDQSxPQUFPO1FBQ1AsMkJBQWdCLENBQUMsaUNBQWlDLEVBQ2xELDJCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFBLG1CQUFtQjthQUNuRCxNQUFNO1FBQ0gsT0FBTztRQUNQLDJCQUFnQixDQUFDLGtCQUFrQixFQUNuQywyQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQSxpQkFBaUI7YUFDakQsR0FBRztRQUNBLE9BQU87UUFDUCwyQkFBZ0IsQ0FBQyxZQUFZLENBQzVCLENBQUMsQ0FBQSxvQkFBb0I7UUFFMUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ25CLENBQUM7Q0FDSjtBQWxDRCxnQ0FrQ0MifQ==