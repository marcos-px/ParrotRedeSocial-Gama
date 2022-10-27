import deleteUserUsecase from "./delete.user.usecase";

test("Teste unitário DeleteUserUseCase", async() => {
    const user = {
        indexId:0
    }
    expect(await deleteUserUsecase.execute(user)).toBeUndefined();
})