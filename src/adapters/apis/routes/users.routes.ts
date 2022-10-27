import express from "express";
import usersControllers from "../controllers/users.controllers";
// import { auth } from "../middlewares/auth.middleware";
import usersMiddlewares from "../middlewares/users.middlewares";
import { CommonRoutesConfig } from "./common.routes.config";

export class UserRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/users`)
        .get(
            usersMiddlewares.compareSync,
            usersControllers.listUsers,
        ) // listar usuários,
        this.app.route(`/register`)
        .post(
            usersMiddlewares.validateUserRepeated,
            usersControllers.createUser,
        )

        this.app.route(`/users/:indexId`)
        .all(
            usersMiddlewares.validateUserExists)//valida se conta existe ou não
        .put(
            usersMiddlewares.compareSync,
            usersMiddlewares.validateUserExists,
            usersControllers.updateUsers)//atualizar usuário
        .delete(
            usersMiddlewares.compareSync,
            usersMiddlewares.validateUserExists,
            usersControllers.removeUsers)//deletar usuário
        .get(
            usersMiddlewares.compareSync,
            usersControllers.getUsersById
            );//pegar conta por id
            
        this.app.route(`/login`)
            .post(
                usersControllers.loginBy
                
            )
        return this.app
    }
}