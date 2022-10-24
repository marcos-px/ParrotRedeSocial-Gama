import { IUsersEntity } from "../../entities/users/users.interface.entity";
import usersRepository, { UsersRepository } from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

class ListUserUseCase implements IUseCase{
    constructor(private _repository: UsersRepository){}
    async execute(): Promise<IUsersEntity[] | undefined> {
        return await this._repository.list()        
    }
}

export default new ListUserUseCase(
    usersRepository
)