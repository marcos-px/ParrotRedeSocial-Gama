"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.MySqlDb = void 0;
const Sequelize = __importStar(require("sequelize"));
const db_config_1 = __importDefault(require("../config/db.config"));
class MySqlDb {
    constructor() {
        this._db = db_config_1.default.database;
        this._username = db_config_1.default.username;
        this._password = db_config_1.default.password;
        this._host = db_config_1.default.host;
        this._dialect = 'mysql';
        this._port = Number(db_config_1.default.port);
        this._adapter = new Sequelize.Sequelize(this._db, this._username, this._password, {
            host: this._host,
            dialect: this._dialect,
            port: this._port
        });
    }
    static getInstance() {
        if (!MySqlDb._instance) {
            MySqlDb._instance = new MySqlDb();
        }
        return MySqlDb._instance;
    }
    create(model, data) {
        return model.create(data);
    }
    update(model, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield model.update(data);
            return model.save();
        });
    }
    list(model, includes) {
        return model.findAll(includes);
    }
    delete(model, dataWhere) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield model.destroy({
                where: dataWhere
            });
            return (result > 0);
        });
    }
    read(model, dataId, includes) {
        try {
            return model.findByPk(dataId, includes);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    createModel(name, properties) {
        return this._adapter.define(name, properties, {
            timestamps: false
        });
    }
}
exports.MySqlDb = MySqlDb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlzcWwuZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwuZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUM7QUFDdkMsb0VBQTJDO0FBRzNDLE1BQWEsT0FBTztJQVVoQjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQVEsQ0FBQyxRQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBUSxDQUFDLFFBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFRLENBQUMsUUFBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxJQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5RSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVc7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUM7WUFDbkIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBcUQsRUFBRSxJQUFTO1FBQ25FLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUssTUFBTSxDQUFDLEtBQWdDLEVBQUUsSUFBUzs7WUFDcEQsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUM7S0FBQTtJQUVELElBQUksQ0FBQyxLQUFxRCxFQUFFLFFBQWdCO1FBQ3hFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUssTUFBTSxDQUFDLEtBQXFELEVBQUUsU0FBc0M7O1lBQ3RHLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDL0IsS0FBSyxFQUFFLFNBQVM7YUFDbkIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFFRCxJQUFJLENBQUMsS0FBcUQsRUFBRSxNQUFjLEVBQUUsUUFBZ0I7UUFDeEYsSUFBRztZQUNDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDM0M7UUFBQyxPQUFNLEdBQUcsRUFBQztZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUUsR0FBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZLEVBQUUsVUFBcUM7UUFDM0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDdkIsSUFBSSxFQUNKLFVBQVUsRUFDVjtZQUNJLFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQ0osQ0FBQTtJQUNMLENBQUM7Q0FDSjtBQXRFRCwwQkFzRUMifQ==