import { AuthService } from '@/service/auth';
import { NextFunction, Request, Response } from 'express';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { signUp } = new AuthService();
    await signUp(req.body);
    res.status(201).json({});
  } catch (e) {
    next(e);
  }
};

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { signIn } = new AuthService();
    const { access, refresh } = await signIn(req.body);
    res.json({ access, refresh });
  } catch (e) {
    next(e);
  }
};
