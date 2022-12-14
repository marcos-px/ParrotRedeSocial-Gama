import { UserEntity } from "../../entities/users/users.entity";
import readUserUsecase from "./read.user.usecase";
import createUsersUsecase from "./create.users.usecase";


test("Teste unitário ReadClientUseCase", async ()=> {
    
    const user: UserEntity ={

        "name":"Marcos Teixeira",
        "email":"marc@teixeira.com",
        "apartment":23,
        "password": "1516sa",
        "photo":"http://dsjkhsdkljds.com"
    }
await createUsersUsecase.execute(user);

    const user2: UserEntity = {
        name: "Marcos",
        email: "kmlkmd@151",
        apartment: 15615,
        password: "51651@5165",
        photo:"www.log.img.com"
    }

    expect(await readUserUsecase.execute({indexId:0})).toMatchObject(user2)
})
