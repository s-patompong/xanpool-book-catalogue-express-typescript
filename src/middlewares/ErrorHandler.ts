import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../exceptions/HttpException';

export const ErrorHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';

  res.status(status).json({
    status,
    message,
  });
};
