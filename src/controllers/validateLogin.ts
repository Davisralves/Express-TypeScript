import { Request, Response, NextFunction } from "express";
import StatusCode from "../enums/statusCode";

const validateUserName = (username: string, res: Response) => {
  if(username === undefined) {
    return res.status(StatusCode.BAD_REQUEST).json({ error: "Username is required" })
  } // testar se é possivel passar a Response por parametro e a utilizar.
}

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const {username, password} = req.body;
  validateUserName(username, res);
}