import { IUsersEntity } from "../../entities/users/users.entity";
import usersRepository, { UsersRepository } from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

class ReadUserUseCase implements IUseCase{
    constructor(private _repository: UsersRepository){}
    async execute(data: { iduser:number}): Promise<IUsersEntity | undefined> {
        return await this._repository.readById(data.iduser)        
    }
}

export default new ReadUserUseCase(
    usersRepository
)