import express from "express";
import postsControllers from "../controllers/posts.controllers";
import { auth } from "../middlewares/auth.middleware";
import usersMiddlewares from "../middlewares/users.middlewares";
import { CommonRoutesConfig } from "./common.routes.config";

export class PostsRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'PostsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/post`)
        .post(
            postsControllers.createPost,
        ) 

        this.app.route(`/posts`)
        .get(//auth,
            postsControllers.listPosts,
        ) // listar usuários

        this.app.route(`/posts/:idpost`)
        .all(//auth,
            postsControllers.listPosts)//valida se conta existe ou não
        .put(
            //auth,
            // usersMiddlewares.validateRequiredAccountBodyFields,
            postsControllers.updatePosts)//atualizar usuário
        .delete(
            //auth,
            usersMiddlewares.validateUserExists,
            postsControllers.removePosts)//deletar usuário
        .get(
            //auth,
            postsControllers.getPostsById
                );//pegar conta por id

        return this.app
    }
}