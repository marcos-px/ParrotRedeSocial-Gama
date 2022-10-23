import express from 'express';
import debug from 'debug';
import bcrypt from 'bcryptjs'
import constantsConfig from '../../../infrastructure/config/constants.config';
import readUserUsecase from '../../../domain/usecases/users/read.user.usecase';
import logger from '../../../infrastructure/logs/winston.logs';
import multer from 'multer';
import path from 'path';
import usersRepository from '../../repositories/users.repository';

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
            iduser: Number(req.params.iduser)
        });
        if(users){
            logger.info([' Usuário encontrato: ', users])
            next();
        } else{
            logger.error(`Usuário ${req.params.iduser} não existe`)
            res.status(400).send({error: `Não encontramos o usuário ${req.params.iduser}. Verifique e tente novamente`})
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