import express from 'express';
import debug from 'debug'
import userModels from "../../../infrastructure/persistence/mysql/models/user.models.mysql.DB";
import listUserUsecase from '../../../domain/usecases/users/list.user.usecase';
import readUserUsecase from '../../../domain/usecases/users/read.user.usecase';
import createUsersUsecase from '../../../domain/usecases/users/create.users.usecase';
import updateUserUsecase from '../../../domain/usecases/users/update.user.usecase';
import deleteUserUsecase from '../../../domain/usecases/users/delete.user.usecase';
import bcrypt from 'bcryptjs'

const log: debug.Debugger = debug('app:users-controller');

class UsersController {
    async listUsers(req: express.Request, res: express.Response){
        const users = await listUserUsecase.execute();
        res.status(200).send(users);
};

    async getUsersById(req: express.Request, res: express.Response){
        const users = await readUserUsecase.execute({
            iduser: Number(req.params.iduser)
        });
        res.status(200).send(users);
    };

    async createUser(req: express.Request, res: express.Response){
        const users = await createUsersUsecase.execute(req.body);
            log(users);
        
        // let { name, email, apartment, password} = req.body
        // const keyHash = await bcrypt.hash(password,10);
        // password = keyHash
        res.status(201).send(users);
    }

    async updateUsers(req: express.Request, res: express.Response){
        const users = await updateUserUsecase.execute(req.body);
        res.status(200).send(users)
    }

    async removeUsers(req: express.Request, res: express.Response){
        await deleteUserUsecase.execute({
            iduser: Number(req.params.iduser)
        });
        res.status(204).send();
    }
}

export default new UsersController();