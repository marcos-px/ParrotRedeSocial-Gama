import { PostEntity } from "../../entities/posts/posts.entity";
import readPostUsecase from "./read.post.usecase";
import createPostUsecase from "./create.post.usecase";

test("Teste unitário ReadPostUseCase", async ()=> {
    
    const post: PostEntity ={

        "content":"Um post bem legal",
        iduser:1,
    }
await createPostUsecase.execute(post);

    const post2: PostEntity = {
        "content":"Um post bem legal",
        iduser:1,
    }

    expect(await readPostUsecase.execute({idpost:0})).toMatchObject(post2)
})
