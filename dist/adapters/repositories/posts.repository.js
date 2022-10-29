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
exports.PostsRepository = void 0;
const mysql_DB_1 = require("../../infrastructure/persistence/mysql/mysql.DB");
const posts_models_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/posts.models.mysql.DB"));
const posts_modelstoentities_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/posts.modelstoentities.mysql.DB"));
const posts_entitiestomodels_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/posts.entitiestomodels.mysql.DB"));
class PostsRepository {
    constructor(_database, _modelPosts) {
        this._database = _database;
        this._modelPosts = _modelPosts;
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield this._database.read(this._modelPosts, resourceId);
                return (0, posts_modelstoentities_mysql_DB_1.default)(posts);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userGeneralPost } = (0, posts_entitiestomodels_mysql_DB_1.default)(resource);
            const modelPosts = yield this._database.create(this._modelPosts, userGeneralPost);
            return resource;
        });
    }
    deletedById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelPosts, { idpost: resourceId });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this._database.list(this._modelPosts);
            const clients = posts.map(posts_modelstoentities_mysql_DB_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let postModel = yield this._database.read(this._modelPosts, resource.idpost);
            const { userGeneralPost } = (0, posts_entitiestomodels_mysql_DB_1.default)(resource);
            yield this._database.update(postModel, userGeneralPost);
            return resource;
        });
    }
}
exports.PostsRepository = PostsRepository;
exports.default = new PostsRepository(mysql_DB_1.MySqlDB.getInstance(), posts_models_mysql_DB_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVycy9yZXBvc2l0b3JpZXMvcG9zdHMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSw4RUFBMEU7QUFHMUUsZ0lBQTRGO0FBQzVGLHFKQUE4RztBQUM5RyxxSkFBNkc7QUFHN0csTUFBYSxlQUFlO0lBRXhCLFlBQ1ksU0FBbUIsRUFDbkIsV0FBMkQ7UUFEM0QsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0Q7SUFDakUsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFrQjs7WUFDN0IsSUFBSTtnQkFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUE7Z0JBQ3JFLE9BQU8sSUFBQSx5Q0FBZ0IsRUFBQyxLQUFLLENBQUMsQ0FBQzthQUNsQztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7UUFDTCxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBb0I7O1lBQzdCLE1BQU0sRUFBQyxlQUFlLEVBQUMsR0FBRyxJQUFBLHlDQUFlLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ2xGLE9BQU8sUUFBUSxDQUFBO1FBQ25CLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxVQUFrQjs7WUFDaEMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQUE7UUFDdEUsQ0FBQztLQUFBO0lBRUssSUFBSTs7WUFDTixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN6RCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLHlDQUFnQixDQUFDLENBQUE7WUFDM0MsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFFBQW9COztZQUNqQyxJQUFJLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLE1BQU8sQ0FBQyxDQUFDO1lBQzlFLE1BQU0sRUFBQyxlQUFlLEVBQUMsR0FBRyxJQUFBLHlDQUFlLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDeEQsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBO0NBQ0E7QUF0Q0wsMENBc0NLO0FBRUQsa0JBQWUsSUFBSSxlQUFlLENBQzlCLGtCQUFPLENBQUMsV0FBVyxFQUFFLEVBQ3JCLCtCQUFTLENBQ1osQ0FBQSJ9