import { IUsersEntity } from "../../../domain/entities/users/users.entity.interface";

export default interface IMocks {
    getUsers(): IUsersEntity[];
}