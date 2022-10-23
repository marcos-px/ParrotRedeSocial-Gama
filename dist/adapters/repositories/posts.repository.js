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
    static findOneBy(arg0) {
        throw new Error('Method not implemented.');
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
            const posts = (0, posts_entitiestomodels_mysql_DB_1.default)(resource);
            const modelUsers = yield this._database.create(this._modelPosts, posts);
            resource.idpost = modelUsers;
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
            const posts = (0, posts_entitiestomodels_mysql_DB_1.default)(resource);
            yield this._database.update(postModel, posts);
            return resource;
        });
    }
}
exports.PostsRepository = PostsRepository;
exports.default = new PostsRepository(mysql_DB_1.MySqlDB.getInstance(), posts_models_mysql_DB_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVycy9yZXBvc2l0b3JpZXMvcG9zdHMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSw4RUFBMEU7QUFHMUUsZ0lBQTRGO0FBQzVGLHFKQUE4RztBQUM5RyxxSkFBNkc7QUFHN0csTUFBYSxlQUFlO0lBSXhCLFlBQ1ksU0FBbUIsRUFDbkIsV0FBMkQ7UUFEM0QsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0Q7SUFDakUsQ0FBQztJQU5QLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBOEQ7UUFDN0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFNSyxRQUFRLENBQUMsVUFBa0I7O1lBQzdCLElBQUk7Z0JBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFBO2dCQUNyRSxPQUFPLElBQUEseUNBQWdCLEVBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO1FBQ0wsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLFFBQXFCOztZQUM5QixNQUFNLEtBQUssR0FBRyxJQUFBLHlDQUFlLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1lBQzdCLE9BQU8sUUFBUSxDQUFBO1FBQ25CLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxVQUFrQjs7WUFDaEMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQUE7UUFDdEUsQ0FBQztLQUFBO0lBRUssSUFBSTs7WUFDTixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN6RCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLHlDQUFnQixDQUFDLENBQUE7WUFDM0MsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFFBQXFCOztZQUNsQyxJQUFJLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLE1BQU8sQ0FBQyxDQUFDO1lBQzlFLE1BQU0sS0FBSyxHQUFHLElBQUEseUNBQWUsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QyxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7Q0FDQTtBQXpDTCwwQ0F5Q0s7QUFFRCxrQkFBZSxJQUFJLGVBQWUsQ0FDOUIsa0JBQU8sQ0FBQyxXQUFXLEVBQUUsRUFDckIsK0JBQVMsQ0FDWixDQUFBIn0=