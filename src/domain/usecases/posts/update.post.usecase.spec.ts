import { PostEntity } from "../../entities/posts/posts.entity";
import createPostUsecase from "./create.post.usecase";
import updatePostUsecase from "./update.post.usecase";


test("Teste unitário UpdateClientUseCase", async ()=> {
    
    const post: PostEntity ={

        "content":"Um post bem legal",
        iduser:1,
    }
await createPostUsecase.execute(post);

    const post2: PostEntity = {
        "content":"Um post bem legal",
        iduser:1,
    }

    const post3: PostEntity = {
        "content":"Um post bem legal",
        iduser:1,
    }

    expect(await updatePostUsecase.execute(post2)).toMatchObject(post3)
})
