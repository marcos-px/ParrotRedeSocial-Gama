import { IUseCase } from "../usecase.interface";
import { IUsersEntity } from "../../entities/users/users.entity.interface";
import { IUsersRepository } from "../../repositories/users.repositories.interface";
import UsersRepository  from "../../../adapters/repositories/users.repository";
import jwt  from "jsonwebtoken";

class LoginUserUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository){

    }

    async execute(data: {email: string, password: string}) {
        const user =  await this._repository.readByWhere(data.email, data.password)

            if(user){

            const token = jwt.sign(user, String(process.env.SECRET_KEY), {
                expiresIn: `2 days`
            });

            return {

            user: user,
            token: token}
        }
            return
    }
}

export default new LoginUserUseCase(
    UsersRepository
)