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
const users_modelstoEntities_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/users.modelstoEntities.mysql.DB"));
const users_entitiestoModel_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/users.entitiestoModel.mysql.DB"));
class UsersRepository {
    // static findOneBy(arg0: { decoded: string | import("jsonwebtoken").JwtPayload; }) {
    //   throw new Error('Method not implemented.');
    // }
    constructor(_database, _modelUsers) {
        this._database = _database;
        this._modelUsers = _modelUsers;
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this._database.read(this._modelUsers, resourceId);
                return (0, users_modelstoEntities_mysql_DB_1.default)(user);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userGeneral } = (0, users_entitiestoModel_mysql_DB_1.default)(resource);
            yield this._database.create(this._modelUsers, userGeneral);
            // resource.indexId = modelUsers.null;
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
            const clients = user.map(users_modelstoEntities_mysql_DB_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let userModel = yield this._database.read(this._modelUsers, resource.indexId);
            const { userGeneral } = (0, users_entitiestoModel_mysql_DB_1.default)(resource);
            console.log("UPDATED BY ID");
            yield this._database.update(userModel, userGeneral);
            return resource;
        });
    }
    login(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userGeneral } = (0, users_entitiestoModel_mysql_DB_1.default)(resource);
            const login = yield this._database.login(this._modelUsers, userGeneral);
            return login;
        });
    }
}
exports.UsersRepository = UsersRepository;
exports.default = new UsersRepository(mysql_DB_1.MySqlDB.getInstance(), user_models_mysql_DB_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVycy9yZXBvc2l0b3JpZXMvdXNlcnMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RUFBMEU7QUFHMUUsOEhBQTJGO0FBRTNGLHFKQUE4RztBQUM5RyxtSkFBNEc7QUFNNUcsTUFBYSxlQUFlO0lBQ3hCLHFGQUFxRjtJQUNyRixnREFBZ0Q7SUFDaEQsSUFBSTtJQUNKLFlBQ1ksU0FBbUIsRUFDbkIsV0FBMkQ7UUFEM0QsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0Q7SUFDakUsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFrQjs7WUFDN0IsSUFBSTtnQkFDQSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUE7Z0JBQ3BFLE9BQU8sSUFBQSx5Q0FBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQzthQUNqQztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7UUFDTCxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBb0I7O1lBQzdCLE1BQU0sRUFBQyxXQUFXLEVBQUMsR0FBRyxJQUFBLHdDQUFlLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzNELHNDQUFzQztZQUN0QyxPQUFPLFFBQVEsQ0FBQTtRQUNuQixDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsVUFBa0I7O1lBQ2hDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFBO1FBQ3RFLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ04sTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDeEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5Q0FBZ0IsQ0FBQyxDQUFBO1lBQzFDLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUFvQjs7WUFFakMsSUFBSSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxPQUFRLENBQUMsQ0FBQztZQUMvRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBQSx3Q0FBZSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDNUIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDcEQsT0FBTyxRQUFRLENBQUM7UUFHcEIsQ0FBQztLQUFBO0lBRUssS0FBSyxDQUFDLFFBQXNCOztZQUM5QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBQSx3Q0FBZSxFQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ2pELE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQTtZQUN2RSxPQUFPLEtBQUssQ0FBQTtRQUNoQixDQUFDO0tBQUE7Q0FFSjtBQXBERCwwQ0FvREM7QUFDRyxrQkFBZSxJQUFJLGVBQWUsQ0FDOUIsa0JBQU8sQ0FBQyxXQUFXLEVBQUUsRUFDckIsOEJBQVMsQ0FDWixDQUFBIn0=