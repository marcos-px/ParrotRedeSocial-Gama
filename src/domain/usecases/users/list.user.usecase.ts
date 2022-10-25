import { IUsersEntity } from "../../entities/users/users.entity.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";
import { IUsersRepository } from "../../repositories/users.repositories.interface";

class ListUserUseCase implements IUseCase{
    constructor(private _repository: IUsersRepository){}
    async execute(): Promise<IUsersEntity[] | undefined> {
        return await this._repository.list()        
    }
}

export default new ListUserUseCase(
    UsersRepository
)