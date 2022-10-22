// import userModelsMysqlDB from "../../../infrastructure/persistence/mysql/models/user.models.mysql.DB";

// export async function register(user: any): Promise<void> {
//     try {
//       await userModelsMysqlDB.create(user);
//     } catch (error) {
//       throw error;
//     }
//    }
   
//    export async function login(user: any) {
//     try {
//       const foundUser = await userModelsMysqlDB.findOne({ name: user.name, password: user.password });
//     } catch (error) {
//       throw error;
//     }
//    }