import { IUsersEntity } from "../../../domain/entities/users/users.entity";

export default interface IMocks {
    getUsers(): IUsersEntity[];
}