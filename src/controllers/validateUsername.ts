import { NextFunction, Request, Response } from "express";
import StatusCode from "../enums/statusCode";

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
	const { username } = req.body;
	if (username === undefined) {
		return res
			.status(StatusCode.BAD_REQUEST)
			.json({ error: "Username is required" });
	}
	if (typeof username !== "string") {
		return res
			.status(StatusCode.UNPROCESSABLE_ENTITY)
			.json({ error: "Username must be a string" });
	}
	if (username.length <= 2) {
		return res
			.status(StatusCode.UNPROCESSABLE_ENTITY)
			.json({ error: "Username must be longer than 2 characters" });
	}
	return next();
};

export default validateUsername;
