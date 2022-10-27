import loginUserUsecase from "./login.user.usecase";


test("Teste unitário DeleteUserUseCase", async() => {
    const user = { 
        email: "mdlskamlmk", 
        password: "strinhghhhg55g" }

    expect(await loginUserUsecase.execute(user)).toBeUndefined();
})