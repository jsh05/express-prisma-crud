import validateToken from '@/api/middleware/validate-token';
import { Router } from 'express';
import { getMyPost } from './myPage.controller';

export const myPageRouter = Router();

myPageRouter.get('/', validateToken, getMyPost);
