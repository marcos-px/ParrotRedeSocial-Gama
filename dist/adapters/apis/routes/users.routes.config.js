"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AccountsRoutes');
    }
    configureRoutes() {
        this.app.route(`/users`)
            .get() // listar usuários
            .post(); // cadastrar usuários, validar se conta existe, validar os requisitos da conta, validar conta repetida
        this.app.route(`/user/:idUser`)
            .all() //valida se conta existe ou não
            .put() //atualizar usuário
            .delete() //deletar usuário
            .get(); //pegar conta por id
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL3JvdXRlcy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlFQUE0RDtBQUU1RCxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFDOUMsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRyxFQUFFLENBQUMsa0JBQWtCO2FBQ3hCLElBQUksRUFBRSxDQUFDLENBQUMsc0dBQXNHO1FBRS9HLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUM5QixHQUFHLEVBQUUsQ0FBQSwrQkFBK0I7YUFDcEMsR0FBRyxFQUFFLENBQUEsbUJBQW1CO2FBQ3hCLE1BQU0sRUFBRSxDQUFBLGlCQUFpQjthQUN6QixHQUFHLEVBQUUsQ0FBQyxDQUFBLG9CQUFvQjtRQUUzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDbkIsQ0FBQztDQUNKO0FBbEJELGdDQWtCQyJ9