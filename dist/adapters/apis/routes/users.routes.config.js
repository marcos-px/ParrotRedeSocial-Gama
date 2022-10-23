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
            .post(users_controllers_1.default.createUser); // listar usuários
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL3JvdXRlcy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlGQUFnRTtBQUVoRSx5RkFBZ0U7QUFDaEUsaUVBQTREO0FBRTVELE1BQWEsVUFBVyxTQUFRLHlDQUFrQjtJQUM5QyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUN0QixJQUFJLENBQ0QsMkJBQWdCLENBQUMsVUFBVSxDQUM5QixDQUFBLENBQUMsa0JBQWtCO1FBRXBCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHLENBQUMsT0FBTztRQUNSLDJCQUFnQixDQUFDLFNBQVMsQ0FDN0IsQ0FBQSxDQUFDLGtCQUFrQjtRQUVwQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDOUIsR0FBRyxDQUFDLE9BQU87UUFDUiwyQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBLCtCQUErQjthQUN0RSxHQUFHO1FBQ0EsT0FBTztRQUNQLDJCQUFnQixDQUFDLGlDQUFpQyxFQUNsRCwyQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQSxtQkFBbUI7YUFDbkQsTUFBTTtRQUNILE9BQU87UUFDUCwyQkFBZ0IsQ0FBQyxrQkFBa0IsRUFDbkMsMkJBQWdCLENBQUMsV0FBVyxDQUFDLENBQUEsaUJBQWlCO2FBQ2pELEdBQUc7UUFDQSxPQUFPO1FBQ1AsMkJBQWdCLENBQUMsWUFBWSxDQUM1QixDQUFDLENBQUEsb0JBQW9CO1FBRTFCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0NBQ0o7QUFsQ0QsZ0NBa0NDIn0=