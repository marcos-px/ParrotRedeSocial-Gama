"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(user) {
    if (!user)
        return;
    let userGeneral = {
        iduser: user.iduser,
        name: user.name,
        apartment: user.apartment,
        email: user.email,
        password: user.password,
        photo: user.photo
    };
    if (user.logado) {
        userGeneral.iduser = user.iduser;
        userGeneral.name = user.name(userGeneral).apartment = user.apartment;
        userGeneral.email = user.email;
        userGeneral.password = user.password;
        userGeneral.photo = user.photo;
    }
    return userGeneral;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzdG9FbnRpdGllcy5teXNxbC5EQi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL21vZGVsc3RvRW50aXRpZXMubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsSUFBUTtJQUM3QixJQUFHLENBQUMsSUFBSTtRQUNSLE9BQU07SUFFTixJQUFJLFdBQVcsR0FBaUI7UUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztRQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1FBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztLQUNwQixDQUFBO0lBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQ1YsV0FBNEIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxXQUE0QixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUM3QyxXQUEyQixDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEQsV0FBNEIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoRCxXQUE0QixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RELFdBQTRCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDcEQ7SUFFRCxPQUFRLFdBQTRCLENBQUM7QUFDekMsQ0FBQztBQXZCRCw0QkF1QkMifQ==