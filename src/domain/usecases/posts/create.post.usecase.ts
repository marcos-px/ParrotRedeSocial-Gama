import PostsRepository from "../../../adapters/repositories/posts.repository";
import { PostEntity } from "../../entities/posts/posts.entity";
import { IPostsRepository } from "../../repositories/posts.repositories.interface";
import { IUseCase } from "../usecase.interface";

class CreatePostUsecase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(data: PostEntity): Promise<PostEntity | undefined> {
        return await this._repository.create(data)        
    }
}

export default new CreatePostUsecase(
     PostsRepository
)