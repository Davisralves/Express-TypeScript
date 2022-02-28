/* eslint-disable complexity */
import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import { isUndefined } from './validateProducts';

const isNotArrayOfNumbers = (array: []) => {
  if (Array.isArray(array) && array.every((item) => typeof item === 'number')) {
    return false;
  } return true;
};

const validateOrder = async (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  switch (true) {
    case isUndefined(products): return res.status(StatusCode.BAD_REQUEST)
      .json({ error: 'Products is required' });
    case isNotArrayOfNumbers(products): return res.status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ error: 'Products must be an array of numbers' });
    case products.length === 0: return res.status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ error: 'Products can\'t be empty' });
    default: return next();
  } 
};

export default validateOrder;