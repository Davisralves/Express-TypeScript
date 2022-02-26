import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import StatusCode from '../enums/statusCode';
import ProductService from '../services/Products';
import 'dotenv/config';

const registerOrder = async (req: Request, res: Response) => {
  const { products } = req.body;
  const { authorization } = req.headers;
  const { payload: { id: userId } } = jwt.decode(authorization as string) as JwtPayload;
  const orderId = await registerOrder(userId);
  
};

export default registerOrder;