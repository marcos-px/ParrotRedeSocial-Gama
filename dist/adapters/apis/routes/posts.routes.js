"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRoutes = void 0;
const posts_controllers_1 = __importDefault(require("../controllers/posts.controllers"));
const common_routes_config_1 = require("./common.routes.config");
class PostsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PostsRoutes');
    }
    configureRoutes() {
        this.app.route(`/posts`)
            .get(//auth,
        posts_controllers_1.default.listPosts) // listar usuários
            .post(posts_controllers_1.default.createPost);
        this.app.route(`/posts/:idpost`)
            .all(//auth,
        posts_controllers_1.default.listPosts) //valida se conta existe ou não
            .put(
        //auth,
        // usersMiddlewares.validateRequiredAccountBodyFields,
        posts_controllers_1.default.updatePosts) //atualizar usuário
            .delete(
        //auth,
        // usersMiddlewares.validateUserExists,
        posts_controllers_1.default.removePosts) //deletar usuário
            .get(
        //auth,
        posts_controllers_1.default.getPostsById); //pegar conta por id
        return this.app;
    }
}
exports.PostsRoutes = PostsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3Bvc3RzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5RkFBZ0U7QUFHaEUsaUVBQTREO0FBRTVELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUMvQyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGVBQWU7UUFFWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRyxDQUFDLE9BQU87UUFDUiwyQkFBZ0IsQ0FBQyxTQUFTLENBQzdCLENBQUMsa0JBQWtCO2FBQ25CLElBQUksQ0FDRCwyQkFBZ0IsQ0FBQyxVQUFVLENBQzlCLENBQUE7UUFHRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzthQUMvQixHQUFHLENBQUMsT0FBTztRQUNSLDJCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFBLCtCQUErQjthQUM3RCxHQUFHO1FBQ0EsT0FBTztRQUNQLHNEQUFzRDtRQUN0RCwyQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQSxtQkFBbUI7YUFDbkQsTUFBTTtRQUNILE9BQU87UUFDUCx1Q0FBdUM7UUFDdkMsMkJBQWdCLENBQUMsV0FBVyxDQUFDLENBQUEsaUJBQWlCO2FBQ2pELEdBQUc7UUFDQSxPQUFPO1FBQ1AsMkJBQWdCLENBQUMsWUFBWSxDQUN4QixDQUFDLENBQUEsb0JBQW9CO1FBRTlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0NBQ0o7QUFsQ0Qsa0NBa0NDIn0=