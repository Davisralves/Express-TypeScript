import jwt from 'jsonwebtoken';
import 'dotenv/config'; 

const generateToken = (id: number, username: string) => {
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET || 'SECRET');
  return token;
};

export default generateToken;