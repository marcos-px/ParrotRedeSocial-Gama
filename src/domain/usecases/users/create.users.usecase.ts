import { IUsersEntity } from "../../entities/users/users.entity";
import usersRepository, { UsersRepository } from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

export default class CreateUserUsecase implements IUseCase{
    constructor(private _repository: UsersRepository){}
    async execute(data: IUsersEntity): Promise<IUsersEntity | undefined> {
        return await this._repository.create(data)        
    }
}

// export default new CreateUserUsecase(
//     usersRepository
// )