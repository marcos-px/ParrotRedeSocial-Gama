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
            const posts = yield list_post_usecase_1.default.execute();
            res.status(200).send(posts);
        });
    }
    ;
    getPostsById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield read_post_usecase_1.default.execute({
                idpost: Number(req.params.idpost)
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
            const posts = create_post_usecase_1.default.execute(req.body);
            log(posts);
            res.status(201).send(posts);
        });
    }
    updatePosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield update_post_usecase_1.default.execute(req.body);
            res.status(200).send(posts);
        });
    }
    removePosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield delete_post_usecase_1.default.execute({
                iduser: Number(req.params.iduser)
            });
            res.status(204).send();
        });
    }
}
exports.default = new PostsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9jb250cm9sbGVycy9wb3N0cy5jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUF5QjtBQUl6Qix1R0FBOEU7QUFDOUUseUdBQStFO0FBQy9FLHlHQUErRTtBQUMvRSw2R0FBbUY7QUFDbkYsNkdBQW1GO0FBQ25GLDZHQUFtRjtBQUVuRixNQUFNLEdBQUcsR0FBbUIsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUxRCxNQUFNLGVBQWU7SUFDWCxTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDdkQsTUFBTSxLQUFLLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUFBLENBQUM7SUFFUSxZQUFZLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDMUQsTUFBTSxLQUFLLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE9BQU8sQ0FBQztnQkFDeEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNwQyxDQUFDLENBQUM7WUFDSCxJQUFJO2dCQUNBLElBQUksS0FBSyxFQUFDO29CQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMvQjtnQkFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDekI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLDBCQUFlLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxDQUFBO2FBQ3ZHO1FBQ0wsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVJLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RCxNQUFNLEtBQUssR0FBRyw2QkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCxNQUFNLEtBQUssR0FBRyxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0IsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUM1QixNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3BDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=