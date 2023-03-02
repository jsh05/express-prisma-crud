import { Router } from 'express';
import { createUser, signIn } from './auth.controller';

export const authRouter = Router();

authRouter.post('/sign-up', createUser);
authRouter.post('/sign-in', signIn);
