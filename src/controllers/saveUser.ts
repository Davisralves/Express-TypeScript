import { NextFunction, Response, Request } from "express";
import User from "../interfaces/User";
import generateToken from "./middlewares/generateToken";
import StatusCode from "../enums/statusCode";
import createNewUser from "../services/createNewUser";

const saveUser = async (req: Request, res: Response) => {
  const user: User = req.body;
  const { username, classe, level, password } = user;
  const id: number = await createNewUser(user);
  const token = await generateToken(id, username);
  return res.status(StatusCode.CREATED).json({token})
}

export default saveUser;