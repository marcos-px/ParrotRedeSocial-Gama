
import postsRepository from "../../../adapters/repositories/posts.repository";
import { IPostEntity } from "../../entities/posts/posts.entity";
import { IPostsRepository } from "../../repositories/posts.repositories";
import { IUseCase } from "../usecase.interface";

class ListUserUseCase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(): Promise<IPostEntity[] | undefined> {
        return await this._repository.list()        
    }
}

export default new ListUserUseCase(
    postsRepository
)