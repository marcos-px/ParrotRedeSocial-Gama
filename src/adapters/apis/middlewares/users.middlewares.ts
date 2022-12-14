import express from 'express';
import debug from 'debug';
import bcrypt from 'bcrypt'
import constantsConfig from '../../../infrastructure/config/constants.config';
import readUserUsecase from '../../../domain/usecases/users/read.user.usecase';
import logger from '../../../infrastructure/logs/winston.logs';
import multer from 'multer';
import path from 'path';
import {validate, Joi, } from 'express-validation'
import jwt from 'jsonwebtoken';


const log: debug.IDebugger = debug('app:users-middleware');

class UsersMiddlerare{
    async validateRequiredAccountBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if( req.body && req.body.indexId !== undefined){
            next();
        } else{
            res.status(400).send({error: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.BODYFIELDS_NO})
        }
    }

    async validateUserExists(req: express.Request, res: express.Response, next: express.NextFunction){
        const users = await readUserUsecase.execute({
            indexId: Number(req.params.indexId)
        });
        if(users){
            logger.info([' Usuário encontrado: ', users])
            next();
        } else{
            logger.error(`Usuário ${req.params.indexId} não existe`)
            res.status(400).send({error: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.USERSEXISTS_NO})
        }
    }

    async validateUserRepeated(req: express.Request, res: express.Response, next: express.NextFunction){
        let rId: number = req.body.indexId;
        const users = await readUserUsecase.execute({
            indexId: rId
        });
        if(!users){
            next();
        } else{
            res.status(400).send({error: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.USERSREPEATED_YES})
        }
    }

    async compareSync(req: express.Request, res: express.Response, next: express.NextFunction){
        try {
            const token = req.header(`Authorization`)?.replace(`Bearer `, ``);

        if(!token){
        res.status(401).send({
            message: constantsConfig.RETURN.MESSAGES.SENDS.KEYANDEMAILINVALID_YES
        });

        }else{
    
        const decoded = jwt.verify(token, String( process.env.SECRET_KEY));
        if(typeof decoded === 'string'){
            res.status(401).send({
                error: constantsConfig.AUTHENTICATOR.MESSAGES.ERROR.AUTHORIZATION_NO
            });
        }else{
        console.log(decoded.indexId);
        next();

        }
    }

}
    catch (error) {
        res.status(401).send({message: constantsConfig.RETURN.MESSAGES.SENDS.KEYANDEMAILINVALID_YES})
    }

}

    uploadFile(){
        return multer({
            storage: multer.diskStorage({
                destination: (req, file, cb)=>{
                    cb(null, path.resolve("uploads"));
                },
                filename: (req, file, cb)=>[
                    cb(null, `${Date.now()}-${file.originalname.toLocaleLowerCase()}`)
                ]
            })
        })
    }


}

export default new UsersMiddlerare();