import express from 'express';
import validateUsername from './controllers/validateUsername';

const app = express();

app.use(express.json());

app.post('/users', validateUsername, validateClass, validateLevel, validatePassword)
//generateToken, saveUser)

export default app;
