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
                const user = yield this._database.read(this._modelUsers, resourceId, {});
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
            const modelUsers = yield this._database.create(this._modelUsers, userGeneral);
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
            const clients = user.map(users_modelstoEntities_mysql_DB_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("FUNCIONAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.");
            let userModel = yield this._database.read(this._modelUsers, resource.iduser, {});
            const { userGeneral } = (0, users_entitiestoModel_mysql_DB_1.default)(resource);
            console.log("Galo Campeão!");
            const returne = yield this._database.update(userModel, userGeneral);
            console.log(returne);
            return undefined;
        });
    }
}
exports.UsersRepository = UsersRepository;
exports.default = new UsersRepository(mysql_DB_1.MySqlDB.getInstance(), user_models_mysql_DB_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9yZXBvc2l0b3JpZXMvdXNlcnMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RUFBMEU7QUFHMUUsOEhBQTJGO0FBRTNGLHFKQUE4RztBQUM5RyxtSkFBNEc7QUFLNUcsTUFBYSxlQUFlO0lBQ3hCLHFGQUFxRjtJQUNyRixnREFBZ0Q7SUFDaEQsSUFBSTtJQUNKLFlBQ1ksU0FBbUIsRUFDbkIsV0FBMkQ7UUFEM0QsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0Q7SUFDakUsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFrQjs7WUFDN0IsSUFBSTtnQkFDQSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUN2RSxPQUFPLElBQUEseUNBQWdCLEVBQUMsSUFBSSxDQUFDLENBQUM7YUFDakM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO1FBQ0wsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLFFBQW9COztZQUM3QixNQUFNLEVBQUMsV0FBVyxFQUFDLEdBQUcsSUFBQSx3Q0FBZSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RSxRQUFRLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbEMsT0FBTyxRQUFRLENBQUE7UUFDbkIsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLFVBQWtCOztZQUNoQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQTtRQUN0RSxDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNOLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMseUNBQWdCLENBQUMsQ0FBQTtZQUMxQyxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsUUFBb0I7O1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtZQUN2RCxJQUFJLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLE1BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQztZQUNqRixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBQSx3Q0FBZSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDNUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNwQixPQUFPLFNBQVMsQ0FBQztRQUdyQixDQUFDO0tBQUE7Q0FFSjtBQS9DRCwwQ0ErQ0M7QUFDRyxrQkFBZSxJQUFJLGVBQWUsQ0FDOUIsa0JBQU8sQ0FBQyxXQUFXLEVBQUUsRUFDckIsOEJBQVMsQ0FDWixDQUFBIn0=