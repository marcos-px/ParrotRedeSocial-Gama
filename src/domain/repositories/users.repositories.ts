import { IUsersEntity } from "../entities/users/users.entity";

export interface IUsersRepository {
    readById(resourceId: number): Promise<IUsersEntity | undefined>,
    create(resource: IUsersEntity): Promise<IUsersEntity>,
    deletedById(resourceId: number): Promise<void>,
    list(): Promise<IUsersEntity[]>,
    updateById(resource: IUsersEntity): Promise<IUsersEntity | undefined>,
}