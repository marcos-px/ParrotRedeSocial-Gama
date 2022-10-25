
import postsRepository, { PostsRepository } from "../../../adapters/repositories/posts.repository";
import { IPostEntity } from "../../entities/posts/posts.entity.interface";
import { IUseCase } from "../usecase.interface";

class ListUserUseCase implements IUseCase{
    constructor(private _repository: PostsRepository){}
    async execute(): Promise<IPostEntity[] | undefined> {
        return await this._repository.list()        
    }
}

export default new ListUserUseCase(
    postsRepository
)