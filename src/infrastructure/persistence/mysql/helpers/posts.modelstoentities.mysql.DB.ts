import { IPostEntity } from "../../../../domain/entities/posts/posts.entity.interface";

export default function (post:any): IPostEntity | undefined {
    if(!post)
    return

    let userGeneralPost: IPostEntity = {
        idpost: post.idpost,
        content: post.content,
        iduser: post.iduser,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
    }

    if(post.logado){
        (userGeneralPost as IPostEntity).idpost = post.idpost;
        (userGeneralPost as IPostEntity).content = post.content
        (userGeneralPost as IPostEntity).iduser = post.iduser;
        (userGeneralPost as IPostEntity).iduser = post.createdAt;
        (userGeneralPost as IPostEntity).iduser = post.updatedAt;
    }

    return (userGeneralPost as IPostEntity);
}