import express from 'express';
import debug from 'debug';
import bcrypt from 'bcryptjs'
import constantsConfig from '../../../infrastructure/config/constants.config';
import readUserUsecase from '../../../domain/usecases/users/read.user.usecase';

const log: debug.IDebugger = debug('app:users-middleware');

class UsersMiddlerare{
    async validateRequiredAccountBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if( req.body && req.body.iduser !== undefined){
            next();
        } else{
            res.status(400).send({error: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.BODYFIELDS_NO})
        }
    }

    async validateUserExists(req: express.Request, res: express.Response, next: express.NextFunction){
        const users = await readUserUsecase.execute({
            iduser: Number(req.body.iduser)
        });
        if(users){
            next();
        } else{
            res.status(400).send({error: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.USERSEXISTS_NO})
        }
    }

    async validateUserRepeated(req: express.Request, res: express.Response, next: express.NextFunction){
        let rId: number = req.body.iduser;
        const users = await readUserUsecase.execute({
            iduser: rId
        });
        if(!users){
            next();
        } else{
            res.status(400).send({error: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.USERSREPEATED_YES})
        }
    }
}

export default new UsersMiddlerare();