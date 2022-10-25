import { IUsersEntity } from "../../entities/users/users.interface.entity";
import usersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";
import { IUsersRepository } from "../../repositories/users.repositories.interface";

class updateUserUsecase implements IUseCase{
    constructor(private _repository: IUsersRepository){}
    async execute(data: IUsersEntity): Promise<IUsersEntity | undefined> {
        console.log("CONSOLE DO USECASE")

        return await this._repository.updateById(data)        
    }
}

export default new updateUserUsecase(
    usersRepository
)