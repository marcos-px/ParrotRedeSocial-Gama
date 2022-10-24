"use strict";
// import { IUsersRepository } from "../../../domain/repositories/users.repositories";
// import constantsConfig from "../../../infrastructure/config/constants.config";
// import { UsersRepository } from "../../repositories/users.repository";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken"
// class AuthController implements IUsersRepository{
//     async auth (req: express.Request, res: express.Response){
//         const {email, password} = req.body;
//         const user = await UsersRepository.findOneBy(email)
//         if(!user){
//             return res.status(400).json({message: constantsConfig.RETURN.MESSAGES.SENDS.EMAILINVALID_YES})
//         }
//         const bcryptCompare = await bcrypt.compare(password, user.password)
//         if(!bcryptCompare){
//             return res.status(400).json({message: constantsConfig.RETURN.MESSAGES.SENDS.EMAILINVALID_YES})
//         }
//         const hash = jwt.sign(
//             {id: user.iduser},
//             process.env.JWT_SECRET ?? '',
//             {expiresIn: '1h'}
//         )
//         const {paswword: _, ...userLogin} = user;
//         return res.status(201).json({
//             user: userLogin,
//             token: token
//         })
//     }
//     async keyVerified(req: express.Request, res: express.Response){
//         return res.json(req.user)
//     }
//     static passwordChanged = async (req: express.Request) =>{
//         const id = res.locals.JwtPayload.iduser;
//         const ( !(oldPassword && newPassword)){
//             return res.status(400).send
//         }
//     }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL2NvbnRyb2xsZXJzL2xvZ2luLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNGQUFzRjtBQUN0RixpRkFBaUY7QUFDakYseUVBQXlFO0FBQ3pFLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFHakMsb0RBQW9EO0FBQ3BELGdFQUFnRTtBQUVoRSw4Q0FBOEM7QUFDOUMsOERBQThEO0FBRTlELHFCQUFxQjtBQUNyQiw2R0FBNkc7QUFDN0csWUFBWTtBQUVaLDhFQUE4RTtBQUU5RSw4QkFBOEI7QUFDOUIsNkdBQTZHO0FBQzdHLFlBQVk7QUFFWixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLDRDQUE0QztBQUM1QyxnQ0FBZ0M7QUFDaEMsWUFBWTtBQUVaLG9EQUFvRDtBQUVwRCx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IsUUFBUTtBQUVSLHNFQUFzRTtBQUN0RSxvQ0FBb0M7QUFDcEMsUUFBUTtBQUVSLGdFQUFnRTtBQUVoRSxtREFBbUQ7QUFFbkQsa0RBQWtEO0FBQ2xELDBDQUEwQztBQUMxQyxZQUFZO0FBQ1osUUFBUTtBQUNSLElBQUkifQ==