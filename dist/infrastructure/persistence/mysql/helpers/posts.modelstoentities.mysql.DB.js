"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(user) {
    if (!user)
        return;
    let userGeneral = {
        idpost: user.idpost,
        content: user.content,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        iduser: user.iduser,
    };
    if (user.logado) {
        userGeneral.idpost = user.idpost;
        userGeneral.content = user.content(userGeneral).createdAt = user.createdAt;
        userGeneral.updatedAt = user.updatedAt;
        userGeneral.iduser = user.iduser;
    }
    return userGeneral;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMubW9kZWxzdG9lbnRpdGllcy5teXNxbC5EQi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL3Bvc3RzLm1vZGVsc3RvZW50aXRpZXMubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsSUFBUTtJQUM3QixJQUFHLENBQUMsSUFBSTtRQUNSLE9BQU07SUFFTixJQUFJLFdBQVcsR0FBZ0I7UUFDM0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztRQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtLQUN0QixDQUFBO0lBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQ1YsV0FBMkIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqRCxXQUEyQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUNsRCxXQUEwQixDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkQsV0FBMkIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2RCxXQUEyQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3JEO0lBRUQsT0FBUSxXQUEyQixDQUFDO0FBQ3hDLENBQUM7QUFyQkQsNEJBcUJDIn0=