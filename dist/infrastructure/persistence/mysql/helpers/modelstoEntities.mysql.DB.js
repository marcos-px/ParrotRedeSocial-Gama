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
    };
    if (user.logado) {
        userGeneral.iduser = user.iduser;
        userGeneral.name = user.name(userGeneral).apartment = user.apartment;
        userGeneral.email = user.email;
        userGeneral.password = user.password;
    }
    return userGeneral;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzdG9FbnRpdGllcy5teXNxbC5EQi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL21vZGVsc3RvRW50aXRpZXMubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsSUFBUTtJQUM3QixJQUFHLENBQUMsSUFBSTtRQUNSLE9BQU07SUFFTixJQUFJLFdBQVcsR0FBaUI7UUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztRQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0tBQzFCLENBQUE7SUFFRCxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFDVixXQUE0QixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xELFdBQTRCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQzdDLFdBQTJCLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4RCxXQUE0QixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hELFdBQTRCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDMUQ7SUFFRCxPQUFRLFdBQTRCLENBQUM7QUFDekMsQ0FBQztBQXJCRCw0QkFxQkMifQ==