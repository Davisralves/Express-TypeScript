import express from 'express';
import validateClass from './controllers/validateClass';
import validateUsername from './controllers/validateUsername';
import validateLevel from './controllers/validateLevel';
import validatePassword from './controllers/validatePassword';
import saveUser from './controllers/saveUser';

const app = express();

app.use(express.json());

app.post('/users', validateUsername, validateClass, validateLevel, validatePassword, saveUser)

export default app;
