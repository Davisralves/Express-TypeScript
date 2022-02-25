import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const ProductModel = {

  registerProduct: async (name: string, amount: number): Promise<number | undefined> => {
    const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`;
    const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
    return result.insertId;
  },
};

export default ProductModel;