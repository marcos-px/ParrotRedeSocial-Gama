"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRoutes = void 0;
const posts_controllers_1 = __importDefault(require("../controllers/posts.controllers"));
// import { auth } from "../middlewares/auth.middleware";
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
        this.app.route(`/posts/:idpost`)
            .all(//auth,
        posts_controllers_1.default.listPosts) //valida se conta existe ou não
            .put(
        //auth,
        // usersMiddlewares.validateRequiredAccountBodyFields,
        posts_controllers_1.default.updatePosts) //atualizar usuário
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL3JvdXRlcy9wb3N0cy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlGQUFnRTtBQUNoRSx5REFBeUQ7QUFDekQseUZBQWdFO0FBQ2hFLGlFQUE0RDtBQUU1RCxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDL0MsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ3RCLElBQUksQ0FDRCwyQkFBZ0IsQ0FBQyxVQUFVLENBQzlCLENBQUE7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRyxDQUFDLE9BQU87UUFDUiwyQkFBZ0IsQ0FBQyxTQUFTLENBQzdCLENBQUEsQ0FBQyxrQkFBa0I7UUFFcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDL0IsR0FBRyxDQUFDLE9BQU87UUFDUiwyQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQSwrQkFBK0I7YUFDN0QsR0FBRztRQUNBLE9BQU87UUFDUCxzREFBc0Q7UUFDdEQsMkJBQWdCLENBQUMsV0FBVyxDQUFDLENBQUEsbUJBQW1CO2FBQ25ELE1BQU07UUFDSCxPQUFPO1FBQ1AsMkJBQWdCLENBQUMsa0JBQWtCLEVBQ25DLDJCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFBLGlCQUFpQjthQUNqRCxHQUFHO1FBQ0EsT0FBTztRQUNQLDJCQUFnQixDQUFDLFlBQVksQ0FDeEIsQ0FBQyxDQUFBLG9CQUFvQjtRQUU5QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDbkIsQ0FBQztDQUNKO0FBbENELGtDQWtDQyJ9