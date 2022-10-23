import { IPostEntity } from "../../../../domain/entities/posts/posts.entity";

export default function (user:any): IPostEntity | undefined {
    if(!user)
    return

    let userGeneral: IPostEntity = {
        idpost: user.idpost,
        content: user.content,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        iduser: user.iduser,
    }

    if(user.logado){
        (userGeneral as IPostEntity).idpost = user.idpost;
        (userGeneral as IPostEntity).content = user.content
        (userGeneral as IPostEntity).createdAt = user.createdAt;
        (userGeneral as IPostEntity).updatedAt = user.updatedAt;
        (userGeneral as IPostEntity).iduser = user.iduser;
    }

    return (userGeneral as IPostEntity);
}