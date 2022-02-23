import { NextFunction, Request, Response } from "express";
import StatusCode from "../enums/statusCode";

const validateClass = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if(classe === undefined) {
    return res.status(StatusCode.BAD_REQUEST).json({error: 'Classe is required'})
  }
  if(typeof(classe) !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: "Classe must be a string" })
  }
  if(classe.length <= 2) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ error: "Classe must be longer than 2 characters" })
  }
    return next();
}

export default validateClass;