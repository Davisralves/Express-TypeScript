import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import ProductService from '../services/Products';

const registerProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const id = await ProductService.registerProduct(name, amount);
  if (id) {
    const item = { id, name, amount };
    return res.status(StatusCode.CREATED).json({ item });
  } return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ error: 'erro' });
};

export default registerProduct;