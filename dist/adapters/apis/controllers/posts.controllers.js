"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const list_post_usecase_1 = __importDefault(require("../../../domain/usecases/posts/list.post.usecase"));
const read_post_usecase_1 = __importDefault(require("../../../domain/usecases/posts/read.post.usecase"));
const create_post_usecase_1 = __importDefault(require("../../../domain/usecases/posts/create.post.usecase"));
const update_post_usecase_1 = __importDefault(require("../../../domain/usecases/posts/update.post.usecase"));
const delete_post_usecase_1 = __importDefault(require("../../../domain/usecases/posts/delete.post.usecase"));
const log = (0, debug_1.default)('app:posts-controller');
class PostsController {
    listPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield list_post_usecase_1.default.execute();
                res.status(200).send(posts);
            }
            catch (error) {
                console.error(error);
                res.status(404).send("Deu ruim ao listar post.");
            }
        });
    }
    ;
    getPostsById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield read_post_usecase_1.default.execute({
                idpost: Number(req.params)
            });
            try {
                if (posts) {
                    res.status(200).send(posts);
                }
                return res.json(posts);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ message: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.SERVIDORERROR_YES });
            }
        });
    }
    ;
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = create_post_usecase_1.default.execute(req.body);
                log(post);
                res.status(200).send(req.body);
            }
            catch (error) {
                console.error(error);
                res.status(404).send("Deu ruim ao criar post.");
            }
        });
    }
    updatePosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield update_post_usecase_1.default.execute(req.body);
            try {
                res.status(200).send(req.body);
            }
            catch (error) {
                res.status(404).send("Deu ruim ao atualizar o post.");
            }
        });
    }
    removePosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield delete_post_usecase_1.default.execute({
                    idpost: Number(req.params)
                });
                res.status(204).send();
            }
            catch (error) {
                res.status(404).send("Deu ruim ao deletar o post.");
            }
        });
    }
}
exports.default = new PostsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9jb250cm9sbGVycy9wb3N0cy5jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUF5QjtBQUV6Qix1R0FBOEU7QUFDOUUseUdBQStFO0FBQy9FLHlHQUErRTtBQUMvRSw2R0FBbUY7QUFDbkYsNkdBQW1GO0FBQ25GLDZHQUFtRjtBQUVuRixNQUFNLEdBQUcsR0FBbUIsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUxRCxNQUFNLGVBQWU7SUFDWCxTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDdkQsSUFBSTtnQkFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLDJCQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQTthQUNuRDtRQUNULENBQUM7S0FBQTtJQUFBLENBQUM7SUFFUSxZQUFZLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDMUQsTUFBTSxLQUFLLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE9BQU8sQ0FBQztnQkFDeEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2FBQzdCLENBQUMsQ0FBQztZQUNILElBQUk7Z0JBQ0EsSUFBSSxLQUFLLEVBQUM7b0JBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQy9CO2dCQUNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUN6QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsMEJBQWUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLENBQUE7YUFDdkc7UUFDTCxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRUksVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3hELElBQUk7Z0JBQ0EsTUFBTSxJQUFJLEdBQUcsNkJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUE7YUFDbEQ7UUFDTCxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDekQsTUFBTSxLQUFLLEdBQUcsTUFBTSw2QkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hELElBQUk7Z0JBQ0EsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ2pDO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQTthQUN4RDtRQUNMLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCxJQUFJO2dCQUNBLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDO29CQUM1QixNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7aUJBQzdCLENBQUMsQ0FBQztnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQTthQUN0RDtRQUNULENBQUM7S0FBQTtDQUFDO0FBRUYsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9