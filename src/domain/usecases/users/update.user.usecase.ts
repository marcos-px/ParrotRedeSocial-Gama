import { IUsersEntity } from "../../entities/users/users.entity.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUsersRepository } from "../../repositories/users.repositories.interface";
import { IUseCase } from "../usecase.interface";

class updateUserUsecase implements IUseCase{
    constructor(private _repository: IUsersRepository){}
    async execute(data: IUsersEntity): Promise<IUsersEntity | undefined> {
        console.log("CONSOLE DO USECASE")

        return await this._repository.updateById(data)        
    }
}

export default new updateUserUsecase(
    UsersRepository
)