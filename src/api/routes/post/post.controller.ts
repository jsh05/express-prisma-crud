import { JWTHelper } from '@/helper/jwt';
import { PostService } from '@/service/post';
import { getAccessToken } from '@/util/jwt';
import { NextFunction, Request, Response } from 'express';

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { create } = new PostService();
    const accessToken = getAccessToken(req.headers.authorization);
    const { userId } = new JWTHelper().decodeAccessToken(accessToken);

    await create({ authorId: userId, ...req.body });

    res.json({});
  } catch (e) {
    next(e);
  }
};

export const findPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { find } = new PostService();
    const post = await find();
    res.json(post);
  } catch (e) {
    next(e);
  }
};

export const findByIdPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { findById } = new PostService();
    const id = Number(req.params.id);
    const postRecord = await findById(id);
    res.json(postRecord);
  } catch (e) {
    next(e);
  }
};

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { update } = new PostService();
    const id = Number(req.params.id);
    await update(id, req.body);
    res.json({});
  } catch (e) {
    next(e);
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { delete: deletePost } = new PostService();
    const id = Number(req.params.id);
    await deletePost(id);
    res.json({});
  } catch (e) {
    next(e);
  }
};
