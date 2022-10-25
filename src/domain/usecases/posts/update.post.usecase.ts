
import postsRepository, { PostsRepository } from "../../../adapters/repositories/posts.repository";
import { IPostEntity } from "../../entities/posts/posts.entity.interface";
import { IUseCase } from "../usecase.interface";

class ReadUserUseCase implements IUseCase{
    constructor(private _repository: PostsRepository){}
    async execute(data: IPostEntity): Promise<IPostEntity | undefined> {
        return await this._repository.updateById(data)        
    }
}

export default new ReadUserUseCase(
    postsRepository
)