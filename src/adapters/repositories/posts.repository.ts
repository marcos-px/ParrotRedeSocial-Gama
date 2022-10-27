import { IDBModel } from "../../infrastructure/persistence/dbmodel.interface";
import { PostEntity } from "../../domain/entities/posts/posts.entity";
import { MySqlDB } from "../../infrastructure/persistence/mysql/mysql.DB";
import { IPostsRepository } from "../../domain/repositories/posts.repositories.interface";
import * as Sequelize from "sequelize";
import postModel from "../../infrastructure/persistence/mysql/models/posts.models.mysql.DB";
import modelstoEntities from "../../infrastructure/persistence/mysql/helpers/posts.modelstoentities.mysql.DB";
import entitiestoModel from "../../infrastructure/persistence/mysql/helpers/posts.entitiestomodels.mysql.DB";
import bcrypt from "bcryptjs";

export class PostsRepository implements IPostsRepository{

    constructor(
        private _database: IDBModel,
        private _modelPosts: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        ){}
        
    async readById(resourceId: number): Promise<PostEntity | undefined> {
        try {
            const posts = await this._database.read(this._modelPosts, resourceId)
            return modelstoEntities(posts);
        } catch (error) {
            console.error(error);
        }
    }
    
    async create(resource: PostEntity): Promise<PostEntity> {
        const {userGeneralPost} = entitiestoModel(resource);
        const modelPosts = await this._database.create(this._modelPosts, userGeneralPost);
        return resource
    }

    async deletedById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelPosts, {idpost:resourceId})
    }

    async list(): Promise<PostEntity[]> {
        const posts = await this._database.list(this._modelPosts)
        const clients = posts.map(modelstoEntities)
        return clients;
    }

    async updateById(resource: PostEntity): Promise<PostEntity | undefined> {
        let postModel = await this._database.read(this._modelPosts, resource.idpost!);
        const {userGeneralPost} = entitiestoModel(resource);
        await this._database.update(postModel, userGeneralPost);
        return resource;
    }
    }

    export default new PostsRepository(
        MySqlDB.getInstance(),
        postModel
    )