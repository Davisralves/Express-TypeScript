import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import ProductService from '../services/Products';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getAllProducts();
    return res.status(StatusCode.OK).json(products);
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
  }
};

export default getAllProducts;