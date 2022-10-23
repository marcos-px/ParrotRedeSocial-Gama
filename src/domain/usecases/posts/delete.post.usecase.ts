
import postsRepository from "../../../adapters/repositories/posts.repository";
import { IPostsRepository } from "../../repositories/posts.repositories";
import { IUseCase } from "../usecase.interface";

class DeleteUserUseCase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(data: { iduser: number}): Promise<void> {
        return await this._repository.deletedById(data.iduser)        
    }
}

export default new DeleteUserUseCase(
    postsRepository
)