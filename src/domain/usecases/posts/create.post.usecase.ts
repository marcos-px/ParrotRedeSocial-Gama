import postsRepository from "../../../adapters/repositories/posts.repository";
import { IPostEntity } from "../../entities/posts/posts.entity";
import { IPostsRepository } from "../../repositories/posts.repositories.interface";
import { IUseCase } from "../usecase.interface";

class CreatePostUsecase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(data: IPostEntity): Promise<IPostEntity | undefined> {
        return await this._repository.create(data)        
    }
}

export default new CreatePostUsecase(
    postsRepository
)