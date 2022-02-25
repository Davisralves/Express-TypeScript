import { RowDataPacket } from 'mysql2';
import ProductModel from '../models/Products';

const ProductService = {
  registerProduct: async (name: string, amount: number): Promise<number | undefined> => {
    const insertId = await ProductModel.registerProduct(name, amount);
    return insertId;
  },

  getAllProducts: async (): Promise<RowDataPacket> => ProductModel.getAll(),
};

export default ProductService;