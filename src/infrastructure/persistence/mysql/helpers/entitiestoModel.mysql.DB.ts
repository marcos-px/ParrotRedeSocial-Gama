import { IUsersEntity } from "../../../../domain/entities/users/users.entity";

export default function (user: IUsersEntity){
    const userGeneral = {
        iduser: user.iduser,
        name: user.name,
        email: user.email,
        apartment: user.apartment,
        password: user.password
    }

    return {
        userGeneral: userGeneral
    };
}