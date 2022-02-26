import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';
import StatusCode from '../enums/statusCode';

const registerOrder = async (req: Request, res: Response) => {
  const { products } = req.body;
  const { authorization } = req.headers;
  const { payload: { id: userId } } = jwt.decode(authorization as string) as JwtPayload;
  const orderId = await registerOrder(userId);
  const order = { userId, products };
  console.log(orderId);
  return res.status(StatusCode.CREATED).json({ order });
};

export default registerOrder;