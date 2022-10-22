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