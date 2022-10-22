import express from "express";
import { CommonRoutesConfig } from "./common.routes.config";

export class UserRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'AccountsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/login`)
        .post(); // logar no sistema

        this.app.route(`/register`)
        .post();//registrar conta nova

        return this.app
    }
}