import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

const ProductModel = {

  registerProduct: async (name: string, amount: number): Promise<number | undefined> => {
    const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`;
    const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
    return result.insertId;
  },

  registerProductOrder: async (productId: number, orderId: number) => {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    const [result] = await connection.execute<ResultSetHeader>(query, [orderId, productId]);
    return result.insertId;
  },

  getAll: async (): Promise<RowDataPacket> => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [result] = await connection.execute(query) as RowDataPacket[];
    console.log(result);
    return result;
  },
};

export default ProductModel;