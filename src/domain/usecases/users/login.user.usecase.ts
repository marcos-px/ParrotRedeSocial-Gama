import { IUseCase } from "../usecase.interface";
import { IUsersEntity } from "../../entities/users/users.entity.interface";
import { IUsersRepository } from "../../repositories/users.repositories.interface";
import UsersRepository  from "../../../adapters/repositories/users.repository";


class LoginUserUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository){}

    async execute(data: {email: string, password: string}): Promise<IUsersEntity>{
        return await this._repository.login(data)
    }
}

export default new LoginUserUseCase(
    UsersRepository
)