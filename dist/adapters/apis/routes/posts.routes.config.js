"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRoutes = void 0;
const posts_controllers_1 = __importDefault(require("../controllers/posts.controllers"));
const users_middlewares_1 = __importDefault(require("../middlewares/users.middlewares"));
const common_routes_config_1 = require("./common.routes.config");
class PostsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PostsRoutes');
    }
    configureRoutes() {
        this.app.route(`/post`)
            .post(posts_controllers_1.default.createPost);
        this.app.route(`/posts`)
            .get(//auth,
        posts_controllers_1.default.listPosts); // listar usuários
        this.app.route(`/posts/:posts`)
            .all(//auth,
        users_middlewares_1.default.validateUserExists, posts_controllers_1.default.listPosts) //valida se conta existe ou não
            .put(
        //auth,
        users_middlewares_1.default.validateRequiredAccountBodyFields, posts_controllers_1.default.updatePosts) //atualizar usuário
            .delete(
        //auth,
        users_middlewares_1.default.validateUserExists, posts_controllers_1.default.removePosts) //deletar usuário
            .get(
        //auth,
        posts_controllers_1.default.getPostsById); //pegar conta por id
        return this.app;
    }
}
exports.PostsRoutes = PostsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL3JvdXRlcy9wb3N0cy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlGQUFnRTtBQUVoRSx5RkFBZ0U7QUFDaEUsaUVBQTREO0FBRTVELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUMvQyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDdEIsSUFBSSxDQUNELDJCQUFnQixDQUFDLFVBQVUsQ0FDOUIsQ0FBQTtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHLENBQUMsT0FBTztRQUNSLDJCQUFnQixDQUFDLFNBQVMsQ0FDN0IsQ0FBQSxDQUFDLGtCQUFrQjtRQUVwQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDOUIsR0FBRyxDQUFDLE9BQU87UUFDUiwyQkFBZ0IsQ0FBQyxrQkFBa0IsRUFDbkMsMkJBQWdCLENBQUMsU0FBUyxDQUFDLENBQUEsK0JBQStCO2FBQzdELEdBQUc7UUFDQSxPQUFPO1FBQ1AsMkJBQWdCLENBQUMsaUNBQWlDLEVBQ2xELDJCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFBLG1CQUFtQjthQUNuRCxNQUFNO1FBQ0gsT0FBTztRQUNQLDJCQUFnQixDQUFDLGtCQUFrQixFQUNuQywyQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQSxpQkFBaUI7YUFDakQsR0FBRztRQUNBLE9BQU87UUFDUCwyQkFBZ0IsQ0FBQyxZQUFZLENBQ3hCLENBQUMsQ0FBQSxvQkFBb0I7UUFFOUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ25CLENBQUM7Q0FDSjtBQW5DRCxrQ0FtQ0MifQ==