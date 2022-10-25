import { UserEntity } from "../entities/users/users.entity";

export interface IUsersRepository {
    readById(resourceId: number): Promise<UserEntity | undefined>,
    create(resource: UserEntity): Promise<UserEntity>,
    deletedById(resourceId: number): Promise<void>,
    list(): Promise<UserEntity[]>,
    updateById(resource: UserEntity): Promise<UserEntity | undefined >,
    login(resource: UserEntity): Promise<UserEntity>
}