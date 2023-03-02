import validateToken from '@/api/middleware/validate-token';
import { Router } from 'express';
import {
  createPost,
  deletePost,
  findByIdPost,
  findPost,
  updatePost,
} from './post.controller';

export const postRouter = Router();

postRouter.post('/', validateToken, createPost);
postRouter.get('/', findPost);
postRouter.get('/:id', findByIdPost);
postRouter.patch('/:id', validateToken, updatePost);
postRouter.delete(':/id', validateToken, deletePost);
