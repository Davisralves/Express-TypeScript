import { Response, Request, NextFunction } from 'express';
import StatusCode from '../enums/statusCode';

export const isUndefined = (value: undefined | string | number) => value === undefined;

const isNotString = (value: string) => typeof value !== 'string'; 

const hasLengthLesserThan = (value: string, index: number) => value.length < index;

export const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (isUndefined(name)) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Name is required' });
  }
  if (isNotString(name)) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: 'Name must be a string' });
  } 
  if (hasLengthLesserThan(name, 3)) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ error: 'Name must be longer than 2 characters' });
  } return next();
};

export const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (isUndefined(amount)) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Amount is required' });
  }
  if (isNotString(amount)) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: 'Amount must be a string' });
  }
  if (hasLengthLesserThan(amount, 3)) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ error: 'Amount must be longer than 2 characters' });
  } return next();
};
