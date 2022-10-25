import { IUsersEntity } from "../../../domain/entities/users/users.entity.interface";
import IMocks from "./mocks.interface";
import { faker } from "@faker-js/faker"
import usersRepository from "../../../adapters/repositories/users.repository";

export default class FakerMocks implements IMocks{
    getUsers(): IUsersEntity[]{
        let users: IUsersEntity[] = [];
        users = this.getUsers();
        return (this.getUsers() as IUsersEntity[]);
    }

    private _getUsers(): IUsersEntity[]{
        const users: IUsersEntity[] = [];
        Array.from({ length: 10}).forEach(()=>{
            users.push({
                indexId: Number(faker.finance.amount()),
                name: faker.name.fullName(),
                email: String(faker.internet.email),
                apartment:Number(faker.finance.amount()),
                password: String(faker.internet.password),
                photo: faker.image.people()
            })
        })
        return users;
    }

}