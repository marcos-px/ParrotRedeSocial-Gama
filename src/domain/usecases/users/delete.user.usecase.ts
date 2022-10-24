import { IUsersEntity } from "../../entities/users/users.interface.entity";
import usersRepository, { UsersRepository } from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

class DeleteUserUseCase implements IUseCase{
    constructor(private _repository: UsersRepository){}
    async execute(data: { iduser: number}): Promise<void> {
        return await this._repository.deletedById(data.iduser)        
    }
}

export default new DeleteUserUseCase(
    usersRepository
)