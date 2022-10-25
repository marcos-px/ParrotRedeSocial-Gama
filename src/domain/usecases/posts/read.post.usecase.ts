import PostsRepository from "../../../adapters/repositories/posts.repository";
import { IPostEntity } from "../../entities/posts/posts.entity.interface";
import { IPostsRepository } from "../../repositories/posts.repositories.interface";
import { IUseCase } from "../usecase.interface";

class ReadUserUseCase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(data: { idpost:number}): Promise<IPostEntity | undefined> {
        return await this._repository.readById(data.idpost)        
    }
}

export default new ReadUserUseCase(
    PostsRepository
)