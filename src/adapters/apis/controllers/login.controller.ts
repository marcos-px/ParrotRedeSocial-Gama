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