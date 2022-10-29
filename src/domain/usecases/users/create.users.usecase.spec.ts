import { UserEntity } from "../../entities/users/users.entity";
import {UsersRepository} from "../../../adapters/repositories/users.repository";
import createUsersUsecase from "./create.users.usecase";

jest.mock("../../../adapters/repositories/users.repository");

const UsersRepositoryMock = UsersRepository as jest.Mock<UsersRepository>

test("Teste unitário createUserUseCase", async ()=> {
    
    const userRepository = new UsersRepositoryMock() as jest.Mocked<UsersRepository>;
    userRepository.create.mockRejectedValue({
        "name":"Marcos Teixeira",
        "email":"marc@teixeira.com",
        "apartment":23,
        "password": "1516sa",
        "photo":"http://dsjkhsdkljds.com"
    })

    const user: UserEntity = {

        name: "Marcos",
        email: "kmlkmd@151",
        apartment: 15615,
        password: "51651@5165",
        photo:"www.log.img.com"
    }

    expect(await createUsersUsecase.execute(user)).toMatchObject(user)
})
