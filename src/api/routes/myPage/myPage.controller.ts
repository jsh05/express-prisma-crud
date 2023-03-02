import { JWTHelper } from '@/helper/jwt';
import { MyPageService } from '@/service/myPage';
import { getAccessToken } from '@/util/jwt';
import { NextFunction, Request, Response } from 'express';

export const getMyPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { getMyPost } = new MyPageService();
    const accessToken = getAccessToken(req.headers.authorization);
    const { userId } = new JWTHelper().decodeAccessToken(accessToken);

    const userPosts = await getMyPost(`${userId}`);
    res.json(userPosts);
  } catch (e) {
    next(e);
  }
};
