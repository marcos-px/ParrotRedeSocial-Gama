import express from "express";
import postsControllers from "../controllers/posts.controllers";
import usersMiddlewares from "../middlewares/users.middlewares";
import { CommonRoutesConfig } from "./common.routes.config";

export class PostsRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'PostsRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route(`/posts`)
        .get(//auth,
        usersMiddlewares.compareSync,
            postsControllers.listPosts,
        ) // listar posts
        .post(
            usersMiddlewares.compareSync,
            postsControllers.createPost,
        ) 


        this.app.route(`/posts/:idpost`)
        .all(
            usersMiddlewares.compareSync,
            postsControllers.listPosts)//valida se conta existe ou não
        .put(
            usersMiddlewares.compareSync,
            postsControllers.updatePosts)//atualizar usuário
        .delete(
            usersMiddlewares.compareSync,
            postsControllers.removePosts)//deletar usuário
        .get(
            usersMiddlewares.compareSync,
            postsControllers.getPostsById
                )//pegar conta por id

        this.app.route(`/posts/:iduser`)
        .post(
            usersMiddlewares.compareSync,
            postsControllers.createPost,
                )
        return this.app
    }
}