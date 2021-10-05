import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

export const PageNotFound = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => next(createError(404));
