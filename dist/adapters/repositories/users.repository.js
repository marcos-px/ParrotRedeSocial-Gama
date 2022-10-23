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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVycy9yZXBvc2l0b3JpZXMvdXNlcnMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSw4RUFBMEU7QUFHMUUsOEhBQTJGO0FBQzNGLHlJQUF3RztBQUN4Ryx1SUFBc0c7QUFFdEcsTUFBYSxlQUFlO0lBQ3hCLFlBQ1ksU0FBbUIsRUFDbkIsV0FBZ0I7UUFEaEIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUN0QixDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQWtCOztZQUM3QixJQUFJO2dCQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQTtnQkFDcEUsT0FBTyxJQUFBLG1DQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osTUFBTSxJQUFJLEtBQUssQ0FBRSxLQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0M7UUFDTCxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBc0I7O1lBQy9CLE1BQU0sSUFBSSxHQUFHLElBQUEsa0NBQWUsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFFM0UsUUFBUSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2xDLE9BQU8sUUFBUSxDQUFBO1FBQ25CLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxVQUFrQjs7WUFDaEMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQUE7UUFDdEUsQ0FBQztLQUFBO0lBRUssSUFBSTs7WUFDTixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN4RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLENBQUE7WUFDMUMsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFFBQXNCOztZQUNuQyxJQUFJLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLE1BQU8sQ0FBQyxDQUFDO1lBQzlFLE1BQU0sSUFBSSxHQUFHLElBQUEsa0NBQWUsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3QyxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7Q0FDQTtBQXZDTCwwQ0F1Q0s7QUFFRCxrQkFBZSxJQUFJLGVBQWUsQ0FDOUIsa0JBQU8sQ0FBQyxXQUFXLEVBQUUsRUFDckIsOEJBQVMsQ0FDWixDQUFBIn0=