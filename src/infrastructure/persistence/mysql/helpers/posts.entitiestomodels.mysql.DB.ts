import { IPostEntity } from "../../../../domain/entities/posts/posts.entity";

export default function (user: IPostEntity){
    const userGeneral = {
       idpost: user.idpost,
        content: user.content,
        createdAt: user.createdAt,
        uptadedAt: user.updatedAt,
        iduser: user.iduser,
    }

    return {
        userGeneral: userGeneral
    };
}