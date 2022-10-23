import { IDBModel } from "../../infrastructure/persistence/dbmodel.interface";
import { IUsersEntity } from "../../domain/entities/users/users.entity";
import { MySqlDB } from "../../infrastructure/persistence/mysql/mysql.DB";
import { IUsersRepository } from "../../domain/repositories/users.repositories";
import * as Sequelize from "sequelize";
import userModel from "../../infrastructure/persistence/mysql/models/user.models.mysql.DB";
import modelstoEntities from "../../infrastructure/persistence/mysql/helpers/modelstoEntities.mysql.DB";
import entitiestoModel from "../../infrastructure/persistence/mysql/helpers/entitiestoModel.mysql.DB";
import bcrypt from "bcryptjs";

export class UsersRepository implements IUsersRepository{
    static findOneBy(arg0: { decoded: string | import("jsonwebtoken").JwtPayload; }) {
      throw new Error('Method not implemented.');
    }
    constructor(
        private _database: IDBModel,
        private _modelUsers: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        ){}
        
    async readById(resourceId: number): Promise<IUsersEntity | undefined> {
        try {
            const user = await this._database.read(this._modelUsers, resourceId)
            return modelstoEntities(user);
        } catch (error) {
            console.error(error);
        }
    }
    
    async create(resource: IUsersEntity): Promise<IUsersEntity> {
        const user = entitiestoModel(resource);
        const modelUsers = await this._database.create(this._modelUsers, user);
        resource.iduser = modelUsers.null;
        return resource
    }

    async deletedById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelUsers, {iduser:resourceId})
    }

    async list(): Promise<IUsersEntity[]> {
        const user = await this._database.list(this._modelUsers)
        const clients = user.map(modelstoEntities)
        return clients;
    }

    async updateById(resource: IUsersEntity): Promise<IUsersEntity | undefined> {
        let userModel = await this._database.read(this._modelUsers, resource.iduser!);
        const user = entitiestoModel(resource);
        await this._database.update(userModel, user);
        return resource;
    }
    }

    export default new UsersRepository(
        MySqlDB.getInstance(),
        userModel
    )