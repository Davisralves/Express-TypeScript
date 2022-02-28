import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/statusCode';
import generateToken from './middlewares/generateToken';
import UserService from '../services/Users';
import { isUndefined } from './validateProducts';

export const validateUserName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (isUndefined(username)) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Username is required' });
  } return next();
};

export const validateLoginPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (isUndefined(password)) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: 'Password is required' });
  } return next();
};

export const validateUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const userId = await UserService.getUserId(username, password);
  if (userId) {
    const token = generateToken(userId, username);
    return res.status(StatusCode.OK).json({ token });
  } return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Username or password invalid' });
};
