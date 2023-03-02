import { Application } from 'express';
import { json } from 'express';
import morgan from 'morgan';
import { router } from '@/api';
import errorHandler from '@/api/middleware/error-handler';
import { ErrorResponse } from '@/util/error-res';
import { commonError } from '@/constants/error';

export const expressLoader = (app: Application) => {
  app.use(json());

  app.use(morgan('dev'));

  app.use('/', router);
  app.get('/status', (req, res) => {
    return res.json({});
  });

  app.all('*', (_req, _res, next) => {
    next(new ErrorResponse(commonError.notFound));
  });

  app.use(errorHandler);
};
