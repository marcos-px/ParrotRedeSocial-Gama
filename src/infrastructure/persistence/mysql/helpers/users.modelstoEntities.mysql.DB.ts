import bcrypt from "bcrypt";
import { IUsersEntity } from "../../../../domain/entities/users/users.entity.interface";

export default function (user:any): IUsersEntity | undefined {
    if(!user)
    return

    let shufflePass = bcrypt.hashSync(user.password, 10) 

    let userGeneral: IUsersEntity = {
        iduser: user.iduser,
        name: user.name,
        apartment: user.apartment,
        email: user.email,
        password: shufflePass,
        createdAt: user.createdAt,
        updatedAt:user.updatedAt,
        photo: user.photo
    }
//
    if(user.logado){
        (userGeneral as IUsersEntity).iduser = user.iduser;
        (userGeneral as IUsersEntity).name = user.name
        (userGeneral as IUsersEntity).apartment = user.apartment;
        (userGeneral as IUsersEntity).email = user.email;
        (userGeneral as IUsersEntity).password = shufflePass;
        (userGeneral as IUsersEntity).createdAt = user.createdAt;
        (userGeneral as IUsersEntity).updatedAt = user.updatedAt;
        (userGeneral as IUsersEntity).photo = user.photo;
    }

    return (userGeneral as IUsersEntity);
}