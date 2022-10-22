"use strict";
// import { Sequelize } from "sequelize";
// import constantsConfig from "../../../infrastructure/config/constants.config";
// import userModelsMysqlDB from "../../../infrastructure/persistence/mysql/models/user.models.mysql.DB";
// import bcrypt from "bcrypt";
// export async function login(user: any){
//     try {
//         const procuraUsuario = await userModelsMysqlDB.findOne({email: user.email});
//         if (!procuraUsuario){
//             throw new Error(constantsConfig.AUTHENTICATOR.MESSAGES.ERROR.INCORRECT_EMAIL);
//         }
//         const confereLogin = bcrypt.compareSync(user.password, procuraUsuario.password);
//         if (confereLogin){
//             return procuraUsuario;
//         } else{
//             throw new Error(constantsConfig.AUTHENTICATOR.MESSAGES.ERROR.INCORRECT_PASSWORD);
//         }
//     } catch (error) {
//         throw error;
//     }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uYXV0aC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL3NlcnZpY2VzL2xvZ2luLmF1dGguc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5QztBQUN6QyxpRkFBaUY7QUFDakYseUdBQXlHO0FBRXpHLCtCQUErQjtBQUUvQiwwQ0FBMEM7QUFDMUMsWUFBWTtBQUNaLHVGQUF1RjtBQUV2RixnQ0FBZ0M7QUFDaEMsNkZBQTZGO0FBQzdGLFlBQVk7QUFFWiwyRkFBMkY7QUFFM0YsNkJBQTZCO0FBQzdCLHFDQUFxQztBQUNyQyxrQkFBa0I7QUFDbEIsZ0dBQWdHO0FBQ2hHLFlBQVk7QUFDWix3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLFFBQVE7QUFDUixJQUFJIn0=