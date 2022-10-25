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
                debug_1.default.log(posts);
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
            try {
                const posts = yield read_post_usecase_1.default.execute({
                    idpost: Number(req.params)
                });
                debug_1.default.log(posts);
                res.status(200).send(posts);
                return res.json(posts);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ message: "Deu ruim ao buscar o post por id." });
            }
        });
    }
    ;
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = create_post_usecase_1.default.execute(req.body);
                debug_1.default.log(post);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9jb250cm9sbGVycy9wb3N0cy5jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUF5QjtBQUd6Qix5R0FBK0U7QUFDL0UseUdBQStFO0FBQy9FLDZHQUFtRjtBQUNuRiw2R0FBbUY7QUFDbkYsNkdBQW1GO0FBRW5GLE1BQU0sR0FBRyxHQUFtQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTFELE1BQU0sZUFBZTtJQUNYLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN2RCxJQUFJO2dCQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLGVBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDbkI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO2FBQ25EO1FBQ1QsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVRLFlBQVksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMxRCxJQUFJO2dCQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUM7b0JBQ3hDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztpQkFDN0IsQ0FBQyxDQUFDO2dCQUVDLGVBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDekI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFDLENBQUMsQ0FBQTthQUMvRTtRQUNMLENBQUM7S0FBQTtJQUFBLENBQUM7SUFFSSxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsSUFBSTtnQkFDQSxNQUFNLElBQUksR0FBRyw2QkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxlQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNwQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO2FBQ2xEO1FBQ0wsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sS0FBSyxHQUFHLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxJQUFJO2dCQUNBLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNqQztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUE7YUFDeEQ7UUFDTCxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDekQsSUFBSTtnQkFDQSxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDNUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2lCQUM3QixDQUFDLENBQUM7Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMxQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUE7YUFDdEQ7UUFDVCxDQUFDO0tBQUE7Q0FBQztBQUVGLGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==