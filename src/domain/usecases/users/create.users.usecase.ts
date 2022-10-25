import { IUsersEntity } from "../../entities/users/users.entity.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";
import { IUsersRepository } from "../../repositories/users.repositories.interface";

class CreateUserUsecase implements IUseCase{
    constructor(private _repository: IUsersRepository){}
    async execute(data: IUsersEntity): Promise<IUsersEntity | undefined> {
        return await this._repository.create(data)        
    }
}

export default new CreateUserUsecase(
    UsersRepository
)