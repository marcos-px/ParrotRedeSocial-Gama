// import { IUsersEntity } from "../../entities/users/users.entity.interface";
// import usersRepository, { UsersRepository } from "../../../adapters/repositories/users.repository";
// import {IUseCase}  from "../usecase.interface";
// import bcrypt = require("bcryptjs");
// import createUsersUsecase from "./create.users.usecase";

// jest.mock("../../../adapters/repositories/users.repository");

// const UsersRepositoryMock = UsersRepository as jest.Mock<UsersRepository>

// test("Teste unitário createUserUseCase", async ()=> {
    
//     const userRepository = new UsersRepositoryMock() as jest.Mocked<UsersRepository>;
//     userRepository.create.mockRejectedValue({
//         "nome":"Marcos Teixeira",
//         "email":"marc@teixeira.com",
//         "apartment":23,
//         "password": "1516sa"
//     })

//     const user: IUsersEntity = {
//         name: "Marcos",
//         email: "kmlkmd@151",
//         apartment: 15615,
//         password: "51651@5165",
//         indexId:1,
//         photo:"www.log.img.com"
//     }

//     const createUser = new createUsersUsecase(
//         userRepository
//     )
//     expect(await createUser.execute(user))
// })
