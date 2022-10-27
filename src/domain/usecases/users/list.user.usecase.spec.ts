import listUserUsecase from "./list.user.usecase";

test("Teste unitário ListUserUsecase", async() => {
    expect(await listUserUsecase.execute()).toEqual([]);
});