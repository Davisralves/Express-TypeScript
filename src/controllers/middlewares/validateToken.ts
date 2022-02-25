import jwt from 'jsonwebtoken';
import 'dotenv/config'; 

const verifyToken = (token: string) => {
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET || 'SECRET');
    return verify;
  } catch (error) {
    return undefined;
  }
};

export default verifyToken;