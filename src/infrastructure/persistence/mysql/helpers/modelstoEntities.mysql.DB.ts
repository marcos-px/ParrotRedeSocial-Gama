import { IUsersEntity } from "../../../../domain/entities/users/users.entity";

export default function (user:any): IUsersEntity | undefined {
    if(!user)
    return

    let userGeneral: IUsersEntity = {
        iduser: user.iduser,
        name: user.name,
        apartment: user.apartment,
        email: user.email,
        password: user.password,
    }

    if(user.logado){
        (userGeneral as IUsersEntity).iduser = user.iduser;
        (userGeneral as IUsersEntity).name = user.name
        (userGeneral as IUsersEntity).apartment = user.apartment;
        (userGeneral as IUsersEntity).email = user.email;
        (userGeneral as IUsersEntity).password = user.password;
    }

    return (userGeneral as IUsersEntity);
}