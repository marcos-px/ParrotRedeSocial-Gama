"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutesConfig = void 0;
const common_routes_config_1 = require("./common.routes.config");
class userRoutesConfig extends common_routes_config_1.CommonRoutesConfig {
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
exports.userRoutesConfig = userRoutesConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL3JvdXRlcy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlFQUE0RDtBQUU1RCxNQUFhLGdCQUFpQixTQUFRLHlDQUFrQjtJQUNwRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHLEVBQUUsQ0FBQyxrQkFBa0I7YUFDeEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxzR0FBc0c7UUFFL0csSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2FBQzlCLEdBQUcsRUFBRSxDQUFBLCtCQUErQjthQUNwQyxHQUFHLEVBQUUsQ0FBQSxtQkFBbUI7YUFDeEIsTUFBTSxFQUFFLENBQUEsaUJBQWlCO2FBQ3pCLEdBQUcsRUFBRSxDQUFDLENBQUEsb0JBQW9CO1FBRTNCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0NBQ0o7QUFsQkQsNENBa0JDIn0=