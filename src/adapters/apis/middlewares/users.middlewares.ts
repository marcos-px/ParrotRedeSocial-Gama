import express from 'express';
import debug from 'debug';
import bcrypt from 'bcrypt'
import constantsConfig from '../../../infrastructure/config/constants.config';
import readUserUsecase from '../../../domain/usecases/users/read.user.usecase';
import logger from '../../../infrastructure/logs/winston.logs';
import multer from 'multer';
import path from 'path';
import {validate, Joi, ValidationError} from 'express-validation'
import usersRepository from '../../repositories/users.repository';
import { validateHeaderName } from 'http';
import loginUserUsecase from '../../../domain/usecases/users/login.user.usecase';

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
        const users = await loginUserUsecase.execute(req.body)
        let compare = bcrypt.compareSync(req.body.password, users.password)

        if( compare ) {
            logger.info([" Senha comparada!"])
            next()
        } else{
            logger.error(['Senha inválida!'])
            res.status(401).send({message: "Senha ou e-mail inválidos"})
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

    ValidationCreateUser = validate({
        body: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            apartment: Joi.number().required(),
            password: Joi.string().min(8).required(),
            photo: Joi.string().required(),

        })
    })

    loginValid = validate({
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
        })
    })

    updateCreateValid = validate({
        body: Joi.object({
            name: Joi.string(),
            email: Joi.string().email(),
            apartment: Joi.number(),
            password: Joi.string().min(8).regex(/[a-zA-Z0-9]{3,30}/),
            photo: Joi.string(),
    })
})
}

export default new UsersMiddlerare();