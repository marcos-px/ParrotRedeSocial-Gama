import express from "express";
import { CommonRoutesConfig } from "./common.routes.config";

export class UserRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'AccountsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/users`)
        .get() // listar usuários

        this.app.route(`/user/:idUser`)
        .all()//valida se conta existe ou não
        .put()//atualizar usuário
        .delete()//deletar usuário
        .get();//pegar conta por id

        return this.app
    }
}