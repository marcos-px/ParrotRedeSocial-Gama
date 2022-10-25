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
        .get(//auth,
            usersControllers.listUsers,
        ) // listar usuários,
        this.app.route(`/register`)
        .post(
            // usersMiddlewares.ValidationCreateUser,
            usersMiddlewares.validateUserRepeated,
            usersControllers.createUser,
        )

        this.app.route(`/users/:indexId`)
        .all(//auth,
            usersMiddlewares.validateUserExists)//valida se conta existe ou não
        .put(
            //auth,
            usersMiddlewares.validateUserExists,
            usersControllers.updateUsers)//atualizar usuário
        .delete(
            //auth,
            usersMiddlewares.validateUserExists,
            usersControllers.removeUsers)//deletar usuário
        .get(
            //auth,
            usersControllers.getUsersById
            );//pegar conta por id
            
        this.app.route(`/login`)
            .post(
                // usersMiddlewares.loginValid,
                usersControllers.loginBy
                
            )
        return this.app
    }
}