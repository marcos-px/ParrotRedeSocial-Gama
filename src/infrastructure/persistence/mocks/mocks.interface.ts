import { IUsersEntity } from "../../../domain/entities/users/users.interface.entity";

export default interface IMocks {
    getUsers(): IUsersEntity[];
}