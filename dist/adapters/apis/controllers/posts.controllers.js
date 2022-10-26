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
                debug_1.default.log(posts);
            }
            catch (error) {
                console.error(error);
                res.status(404).send({ messages: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.ERRORLIST_YES });
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
                return res.status(500).json({ messages: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.ERRORGETBYID_YES });
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
                res.status(404).send({ messages: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.ERRORCREATED_YES });
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
                res.status(404).send({ messages: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.ERRORUPDATED_YES });
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
                res.status(404).send({ messages: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.ERRORDELETED_YES });
            }
        });
    }
}
exports.default = new PostsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9jb250cm9sbGVycy9wb3N0cy5jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUF5QjtBQUV6Qix1R0FBOEU7QUFDOUUseUdBQStFO0FBQy9FLHlHQUErRTtBQUMvRSw2R0FBbUY7QUFDbkYsNkdBQW1GO0FBQ25GLDZHQUFtRjtBQUVuRixNQUFNLEdBQUcsR0FBbUIsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUxRCxNQUFNLGVBQWU7SUFDWCxTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDdkQsSUFBSTtnQkFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLDJCQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixlQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ25CO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsMEJBQWUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFBO2FBQzVGO1FBQ1QsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVRLFlBQVksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMxRCxJQUFJO2dCQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUM7b0JBQ3hDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FB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