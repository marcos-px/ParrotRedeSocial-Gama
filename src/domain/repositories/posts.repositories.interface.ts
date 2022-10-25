import { IPostEntity } from "../entities/posts/posts.entity.interface";

export interface IPostsRepository {
    readById(resourceId: number): Promise<IPostEntity | undefined>,
    create(resource: IPostEntity): Promise<IPostEntity>,
    deletedById(resourceId: number): Promise<void>,
    list(): Promise<IPostEntity[]>,
    updateById(resource: IPostEntity): Promise<IPostEntity | undefined>,
}