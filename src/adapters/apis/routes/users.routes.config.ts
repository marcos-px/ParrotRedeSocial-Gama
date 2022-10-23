import express from "express";
import usersControllers from "../controllers/users.controllers";
import { auth } from "../middlewares/auth.middleware";
import usersMiddlewares from "../middlewares/users.middlewares";
import { CommonRoutesConfig } from "./common.routes.config";

export class UserRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'AccountsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/user`)
        .post(
            usersControllers.createUser,
        ) // listar usuários

        this.app.route(`/users`)
        .get(//auth,
            usersControllers.listUsers,
        ) // listar usuários

        this.app.route(`/user/:idUser`)
        .all(//auth,
            usersMiddlewares.validateUserExists)//valida se conta existe ou não
        .put(
            //auth,
            usersMiddlewares.validateRequiredAccountBodyFields,
            usersControllers.updateUsers)//atualizar usuário
        .delete(
            //auth,
            usersMiddlewares.validateUserExists,
            usersControllers.removeUsers)//deletar usuário
        .get(
            //auth,
            usersControllers.getUsersById
            );//pegar conta por id

        return this.app
    }
}