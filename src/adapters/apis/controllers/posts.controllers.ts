import express from 'express';
import debug from 'debug'
import bcrypt from 'bcryptjs'
import constantsConfig from '../../../infrastructure/config/constants.config';
import listPostUsecase from '../../../domain/usecases/posts/list.post.usecase';
import readPostUsecase from '../../../domain/usecases/posts/read.post.usecase';
import createPostUsecase from '../../../domain/usecases/posts/create.post.usecase';
import updatePostUsecase from '../../../domain/usecases/posts/update.post.usecase';
import deletePostUsecase from '../../../domain/usecases/posts/delete.post.usecase';

const log: debug.Debugger = debug('app:posts-controller');

class PostsController {
    async listPosts(req: express.Request, res: express.Response){
        try {
            const posts = await listPostUsecase.execute();
            res.status(200).send(posts);
        } catch (error) {
            console.error(error);
            res.status(404).send("Deu ruim ao listar post.")
        }
};

    async getPostsById(req: express.Request, res: express.Response){
        const posts = await readPostUsecase.execute({
            idpost: Number(req.params)
        });
        try {
            if (posts){
                res.status(200).send(posts);
            }
            return res.json(posts)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.SERVIDORERROR_YES})
        } 
    };

    async createPost(req: express.Request, res: express.Response){
        try {
            const post = createPostUsecase.execute(req.body);
            log(post);
        res.status(200).send(req.body);
        } catch (error) {
            console.error(error)
            res.status(404).send("Deu ruim ao criar post.")
        }
    }

    async updatePosts(req: express.Request, res: express.Response){
        const posts = await updatePostUsecase.execute(req.body);
        try {
            res.status(200).send(req.body)
        } catch (error) {
            res.status(404).send("Deu ruim ao atualizar o post.")
        }
    }

    async removePosts(req: express.Request, res: express.Response){
        try {
            await deletePostUsecase.execute({
                idpost: Number(req.params)
            });
            res.status(204).send();
        } catch (error) {
            res.status(404).send("Deu ruim ao deletar o post.")
        }
}}

export default new PostsController();