import bcrypt from 'bcrypt';
import { IUsersEntity } from "../../../../domain/entities/users/users.entity.interface";
//brcrypt


export default function (user: IUsersEntity){
    let shufflePass = bcrypt.hashSync(user.password,10)
    const userGeneral = {
        indexId: user.indexId,
        name: user.name,
        email: user.email,
        apartment: user.apartment,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        photo: user.photo,
    }

    return {
        userGeneral: userGeneral
    };
}