import { NextFunction, Request, Response } from "express";
import StatusCode from "../enums/statusCode";

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if(password === undefined) {
    return res.status(StatusCode.BAD_REQUEST).json({erro: 'Password is required'})
  }
  if(typeof(password) !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: "Password must be a string" })
  }
  if(password.length > 7) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: "Password must be longer than 7 characters" })
  }
    return next();
}

export default validatePassword;