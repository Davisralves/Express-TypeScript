import jwt from 'jsonwebtoken';
import 'dotenv/config';

const generateToken = (id: number, username: string) => 
{ const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};
const token = jwt.sign( { id, username }, process.env.JWT_SECRET, jwtConfig);
return token;
}

export default generateToken;