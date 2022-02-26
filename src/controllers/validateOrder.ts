import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import { isUndefined } from './validateProducts';

const validateOrder = async (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  if (isUndefined(products)) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Products is required' });
  }
  if (products.length > 0) {
    const onlyNumbers = products.every((item: number) => typeof item === 'number');
    if (onlyNumbers) {
      return next();
    } return res.status(StatusCode.UNPROCESSABLE_ENTITY)
      .json({ error: 'Products can\'t be empty' });
  } return res.status(StatusCode.UNPROCESSABLE_ENTITY)
    .json({ error: 'Products must be an array of numbers' });
};

export default validateOrder;