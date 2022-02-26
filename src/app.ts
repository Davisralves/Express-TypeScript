import express from 'express';
import validateClass from './controllers/validateClass';
import validateUsername from './controllers/validateUsername';
import validateLevel from './controllers/validateLevel';
import validatePassword from './controllers/validatePassword';
import saveUser from './controllers/saveUser';
import { validateLoginPassword, validateUserName, validateUser } from './controllers/validateLogin';
import validateToken from './controllers/validateToken';
import { validateAmount, validateName } from './controllers/validateProducts';
import registerProduct from './controllers/registerProduct';
import getAllProducts from './controllers/getAllProducts';
import validateOrder from './controllers/validateOrder';
import registerOrder from './controllers/registerOrder';

const app = express();

app.use(express.json());

app.post('/users', validateUsername, validateClass, validateLevel, validatePassword, saveUser);

app.post('/login', validateUserName, validateLoginPassword, validateUser);

app.use(validateToken);

app.post('/products', validateName, validateAmount, registerProduct);

app.get('/products', getAllProducts);

app.post('/orders', validateOrder, registerOrder);

export default app;
