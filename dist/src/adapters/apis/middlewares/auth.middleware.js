"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvYXV0aC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwREFBMEQ7QUFDMUQsNkRBQTZEO0FBQzdELHlCQUF5QjtBQUN6QiwwRkFBMEY7QUFDMUYsaUZBQWlGO0FBRWpGLHNEQUFzRDtBQUV0RCxtREFBbUQ7QUFDbkQsK0JBQStCO0FBQy9CLElBQUk7QUFFSixtRkFBbUY7QUFDbkYsVUFBVTtBQUNWLHdFQUF3RTtBQUV4RSxtQkFBbUI7QUFDbkIsOEdBQThHO0FBQzlHLE9BQU87QUFFUCxnRUFBZ0U7QUFFaEUscURBQXFEO0FBQ3JELCtEQUErRDtBQUUvRCxZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLHNHQUFzRztBQUN0RyxLQUFLO0FBQ0wsS0FBSyJ9