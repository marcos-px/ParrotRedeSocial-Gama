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
            .get(users_middlewares_1.default.compareSync, users_controllers_1.default.listUsers); // listar usuários,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3VzZXJzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5RkFBZ0U7QUFDaEUseURBQXlEO0FBQ3pELHlGQUFnRTtBQUNoRSxpRUFBNEQ7QUFFNUQsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBQzlDLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHLENBQ0EsMkJBQWdCLENBQUMsV0FBVyxFQUM1QiwyQkFBZ0IsQ0FBQyxTQUFTLENBQzdCLENBQUEsQ0FBQyxtQkFBbUI7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQzFCLElBQUksQ0FDRCwyQkFBZ0IsQ0FBQyxvQkFBb0IsRUFDckMsMkJBQWdCLENBQUMsVUFBVSxDQUM5QixDQUFBO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7YUFDaEMsR0FBRyxDQUNBLDJCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUEsK0JBQStCO2FBQ3RFLEdBQUcsQ0FDQSwyQkFBZ0IsQ0FBQyxXQUFXLEVBQzVCLDJCQUFnQixDQUFDLGtCQUFrQixFQUNuQywyQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQSxtQkFBbUI7YUFDbkQsTUFBTSxDQUNILDJCQUFnQixDQUFDLFdBQVcsRUFDNUIsMkJBQWdCLENBQUMsa0JBQWtCLEVBQ25DLDJCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFBLGlCQUFpQjthQUNqRCxHQUFHLENBQ0EsMkJBQWdCLENBQUMsV0FBVyxFQUM1QiwyQkFBZ0IsQ0FBQyxZQUFZLENBQzVCLENBQUMsQ0FBQSxvQkFBb0I7UUFFMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ25CLElBQUksQ0FDRCwyQkFBZ0IsQ0FBQyxPQUFPLENBRTNCLENBQUE7UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDbkIsQ0FBQztDQUNKO0FBeENELGdDQXdDQyJ9