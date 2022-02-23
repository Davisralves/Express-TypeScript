import { NextFunction, Request, Response } from "express";
import StatusCode from "../enums/statusCode";

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if(level === undefined) {
    return res.status(StatusCode.BAD_REQUEST).json({error: 'Level is required'})
  }
  if(typeof(level) !== 'number') {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: "Level must be a number" })
  }
  if(level <= 0) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: "Level must be greater than 0" })
  }
    return next();
}

export default validateLevel;