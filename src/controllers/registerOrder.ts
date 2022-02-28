import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';
import StatusCode from '../enums/statusCode';
import OrderService from '../services/Orders';
import ProductService from '../services/Products';

const registerOrder = async (req: Request, res: Response) => {
  const { products } = req.body;
  const { authorization } = req.headers;
  const { id: userId } = jwt.decode(authorization as string) as JwtPayload;
  const orderId = await OrderService.registerOrder(userId);
  await ProductService.registerProductOrder(products as number[], orderId as number);
  const order = { userId, products };
  return res.status(StatusCode.CREATED).json({ order });
};

export default registerOrder;