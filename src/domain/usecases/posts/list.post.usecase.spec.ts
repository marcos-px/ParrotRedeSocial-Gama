import listPostUsecase from "./list.post.usecase";

test("Teste unitário ListPostUsecase", async() => {
    expect(await listPostUsecase.execute()).toEqual([]);
});