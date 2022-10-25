import { IPostEntity } from "../../../../domain/entities/posts/posts.entity.interface";

export default function (post: IPostEntity){
    const userGeneralPost = {
       idpost: post.idpost,
        content: post.content,
        iduser: post.iduser,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
    }

    return {
        userGeneralPost: userGeneralPost
    };
}