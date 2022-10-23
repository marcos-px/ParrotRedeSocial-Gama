import express from 'express';
import debug from 'debug'
import userModels from "../../../infrastructure/persistence/mysql/models/user.models.mysql.DB";
import usersEntities from '../../../infrastructure/persistence/mysql/helpers/users.entitiestoModel.mysql.DB';
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
        const posts = await listPostUsecase.execute();
        res.status(200).send(posts);
};

    async getPostsById(req: express.Request, res: express.Response){
        const posts = await readPostUsecase.execute({
            idpost: Number(req.params.idpost)
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
        const posts = createPostUsecase.execute(req.body);
            log(posts);
        res.status(201).send(posts);
    }

    async updatePosts(req: express.Request, res: express.Response){
        const posts = await updatePostUsecase.execute(req.body);
        res.status(200).send(posts)
    }

    async removePosts(req: express.Request, res: express.Response){
        await deletePostUsecase.execute({
            iduser: Number(req.params.iduser)
        });
        res.status(204).send();
    }
}

export default new PostsController();