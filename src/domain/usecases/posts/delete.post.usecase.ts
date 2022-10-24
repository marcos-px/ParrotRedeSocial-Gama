
import postsRepository from "../../../adapters/repositories/posts.repository";
import { IPostsRepository } from "../../repositories/posts.repositories.interface";
import { IUseCase } from "../usecase.interface";

class DeleteUserUseCase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(data: { idpost: number}): Promise<void> {
        return await this._repository.deletedById(data.idpost)        
    }
}

export default new DeleteUserUseCase(
    postsRepository
)