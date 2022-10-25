"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
function default_1(user) {
    if (!user)
        return;
    let shufflePass = bcrypt_1.default.hashSync(user.password, 10);
    let userGeneral = {
        iduser: user.iduser,
        name: user.name,
        apartment: user.apartment,
        email: user.email,
        password: shufflePass,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        photo: user.photo
    };
    //
    if (user.logado) {
        userGeneral.iduser = user.iduser;
        userGeneral.name = user.name(userGeneral).apartment = user.apartment;
        userGeneral.email = user.email;
        userGeneral.password = shufflePass;
        userGeneral.createdAt = user.createdAt;
        userGeneral.updatedAt = user.updatedAt;
        userGeneral.photo = user.photo;
    }
    return userGeneral;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kZWxzdG9FbnRpdGllcy5teXNxbC5EQi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL3VzZXJzLm1vZGVsc3RvRW50aXRpZXMubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFHNUIsbUJBQXlCLElBQVE7SUFDN0IsSUFBRyxDQUFDLElBQUk7UUFDUixPQUFNO0lBRU4sSUFBSSxXQUFXLEdBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUVwRCxJQUFJLFdBQVcsR0FBaUI7UUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztRQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsUUFBUSxFQUFFLFdBQVc7UUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLFNBQVMsRUFBQyxJQUFJLENBQUMsU0FBUztRQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7S0FDcEIsQ0FBQTtJQUNMLEVBQUU7SUFDRSxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFDVixXQUE0QixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xELFdBQTRCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQzdDLFdBQTJCLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4RCxXQUE0QixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hELFdBQTRCLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUNwRCxXQUE0QixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hELFdBQTRCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEQsV0FBNEIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNwRDtJQUVELE9BQVEsV0FBNEIsQ0FBQztBQUN6QyxDQUFDO0FBN0JELDRCQTZCQyJ9