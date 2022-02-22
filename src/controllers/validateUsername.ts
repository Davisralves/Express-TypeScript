import { NextFunction } from "express";
import StatusCode from "../enums/statusCode";

export default validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { Username } = req.body;
  if(Username === undefined) {
    return res.status(StatusCode.BAD_REQUEST).json({erro: 'Username is required'})
  }
  if(typeof(Username) !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: "Username must be a string" })
  }
  if(Username.length > 2) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: "Username must be longer than 2 characters" })
  }
    return next();
}