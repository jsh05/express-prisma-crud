import { Router } from 'express';
import { authRouter } from './routes/auth';
import { myPageRouter } from './routes/myPage';
import { postRouter } from './routes/post';

export const router = Router();

router.use('/auth', authRouter);
router.use('/post', postRouter);
router.use('/my-page', myPageRouter);
