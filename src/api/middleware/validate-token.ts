import { NextFunction, Request, Response } from 'express';

import { commonError } from '../../constants/error';
import { JWTHelper } from '@/helper/jwt';
import { ErrorResponse } from '@/util/error-res';
import { getAccessToken } from '@/util/jwt';

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const accessToken = getAccessToken(req.headers.authorization);
    // const refreshToken = getRefreshToken(req.cookies);

    if (!accessToken) {
      throw new ErrorResponse(commonError.unauthorized);
    }

    const jwtHelper = new JWTHelper();

    // const isTokenExpired = await jwtHelper.checkTokenExpiration(accessToken);

    // if (isTokenExpired) {
    //   res.redirect(303, '/api/auth?redirect=true');
    //   return;
    // }

    next();
  } catch (e) {
    next(e);
  }
};

export default validateToken;
