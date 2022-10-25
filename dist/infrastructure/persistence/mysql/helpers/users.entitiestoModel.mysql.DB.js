"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
//brcrypt
function default_1(user) {
    let shufflePass = bcrypt_1.default.hashSync(user.password, 10);
    const userGeneral = {
        iduser: user.iduser,
        name: user.name,
        email: user.email,
        apartment: user.apartment,
        password: shufflePass,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        photo: user.photo,
    };
    return {
        userGeneral: userGeneral
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZW50aXRpZXN0b01vZGVsLm15c3FsLkRCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL2hlbHBlcnMvdXNlcnMuZW50aXRpZXN0b01vZGVsLm15c3FsLkRCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTRCO0FBRTVCLFNBQVM7QUFHVCxtQkFBeUIsSUFBa0I7SUFDdkMsSUFBSSxXQUFXLEdBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNuRCxNQUFNLFdBQVcsR0FBRztRQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1FBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztRQUN6QixRQUFRLEVBQUUsV0FBVztRQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztLQUNwQixDQUFBO0lBRUQsT0FBTztRQUNILFdBQVcsRUFBRSxXQUFXO0tBQzNCLENBQUM7QUFDTixDQUFDO0FBaEJELDRCQWdCQyJ9