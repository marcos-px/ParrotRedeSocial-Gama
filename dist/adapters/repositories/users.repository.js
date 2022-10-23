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
exports.UsersRepository = void 0;
const mysql_DB_1 = require("../../infrastructure/persistence/mysql/mysql.DB");
const user_models_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/user.models.mysql.DB"));
const modelstoEntities_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/modelstoEntities.mysql.DB"));
const entitiestoModel_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/entitiestoModel.mysql.DB"));
class UsersRepository {
    constructor(_database, _modelUsers) {
        this._database = _database;
        this._modelUsers = _modelUsers;
    }
    static findOneBy(arg0) {
        throw new Error('Method not implemented.');
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this._database.read(this._modelUsers, resourceId);
                return (0, modelstoEntities_mysql_DB_1.default)(user);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (0, entitiestoModel_mysql_DB_1.default)(resource);
            const modelUsers = yield this._database.createModel(this._modelUsers, user);
            resource.iduser = modelUsers.null;
            return resource;
        });
    }
    deletedById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelUsers, { iduser: resourceId });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._database.list(this._modelUsers);
            const clients = user.map(modelstoEntities_mysql_DB_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let userModel = yield this._database.read(this._modelUsers, resource.iduser);
            const user = (0, entitiestoModel_mysql_DB_1.default)(resource);
            yield this._database.update(userModel, user);
            return resource;
        });
    }
}
exports.UsersRepository = UsersRepository;
exports.default = new UsersRepository(mysql_DB_1.MySqlDB.getInstance(), user_models_mysql_DB_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVycy9yZXBvc2l0b3JpZXMvdXNlcnMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSw4RUFBMEU7QUFHMUUsOEhBQTJGO0FBQzNGLHlJQUF3RztBQUN4Ryx1SUFBc0c7QUFFdEcsTUFBYSxlQUFlO0lBSXhCLFlBQ1ksU0FBbUIsRUFDbkIsV0FBZ0I7UUFEaEIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUN0QixDQUFDO0lBTlAsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUE4RDtRQUM3RSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQU1LLFFBQVEsQ0FBQyxVQUFrQjs7WUFDN0IsSUFBSTtnQkFDQSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUE7Z0JBQ3BFLE9BQU8sSUFBQSxtQ0FBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQzthQUNqQztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE1BQU0sSUFBSSxLQUFLLENBQUUsS0FBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdDO1FBQ0wsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLFFBQXNCOztZQUMvQixNQUFNLElBQUksR0FBRyxJQUFBLGtDQUFlLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBRTNFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNsQyxPQUFPLFFBQVEsQ0FBQTtRQUNuQixDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsVUFBa0I7O1lBQ2hDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFBO1FBQ3RFLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ04sTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDeEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxDQUFBO1lBQzFDLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUFzQjs7WUFDbkMsSUFBSSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxNQUFPLENBQUMsQ0FBQztZQUM5RSxNQUFNLElBQUksR0FBRyxJQUFBLGtDQUFlLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0MsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBO0NBQ0E7QUExQ0wsMENBMENLO0FBRUQsa0JBQWUsSUFBSSxlQUFlLENBQzlCLGtCQUFPLENBQUMsV0FBVyxFQUFFLEVBQ3JCLDhCQUFTLENBQ1osQ0FBQSJ9