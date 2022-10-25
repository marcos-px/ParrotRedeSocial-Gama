
import postsRepository, { PostsRepository } from "../../../adapters/repositories/posts.repository";
import { IUseCase } from "../usecase.interface";

class DeleteUserUseCase implements IUseCase{
    constructor(private _repository: PostsRepository){}
    async execute(data: { idpost: number}): Promise<void> {
        return await this._repository.deletedById(data.idpost)        
    }
}

export default new DeleteUserUseCase(
    postsRepository
)