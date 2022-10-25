import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUsersRepository } from "../../repositories/users.repositories.interface";
import { IUseCase } from "../usecase.interface";

class DeleteUserUseCase implements IUseCase{
    constructor(private _repository: IUsersRepository){}
    async execute(data: { indexId: number}): Promise<void> {
        return await this._repository.deletedById(data.indexId)        
    }
}

export default new DeleteUserUseCase(
    UsersRepository
)