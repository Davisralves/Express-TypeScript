import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import verifyToken from './middlewares/validateToken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (authorization) {
    return verifyToken(authorization) ? next() 
      : res.status(StatusCode.UNAUTHORIZED).json({ error: 'Invalid token' });
  } return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Token not found' });
};

export default validateToken;