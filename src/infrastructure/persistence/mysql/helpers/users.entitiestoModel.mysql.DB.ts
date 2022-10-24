import { IUsersEntity } from "../../../../domain/entities/users/users.interface.entity";

export default function (user: IUsersEntity){
    const userGeneral = {
        iduser: user.iduser,
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