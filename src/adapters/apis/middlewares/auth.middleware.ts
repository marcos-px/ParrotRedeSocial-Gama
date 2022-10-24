// import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import 'dotenv/config'
// import usersRepository, { UsersRepository } from '../../repositories/users.repository';
// import constantsConfig from '../../../infrastructure/config/constants.config';

// export const SECRET_KEY: Secret = 'sua-senha-aqui';

// export interface CustomRequest extends Request {
//  token: string | JwtPayload;
// }

// export const auth = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//    const token = req.header('Authorization')?.replace('Bearer ', '');

//    if (!token) {
//      return res.status(401).json({ message: constantsConfig.AUTHENTICATOR.MESSAGES.ERROR.AUTHORIZATION_NO})
//    }

//     const authorizationModelProvider = token.split( " " )[1];
    
//     const decoded = jwt.verify(token, SECRET_KEY);
//     const users = await UsersRepository.findOneBy({decoded})

//   next();
//  } catch (err) {
//    res.status(401).send({ message: constantsConfig.AUTHENTICATOR.MESSAGES.ERROR.AUTHORIZATION_NO});
//  }
// };
