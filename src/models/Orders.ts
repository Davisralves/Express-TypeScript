import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const OrderModel = {

  registerOrder: async (userId: number): Promise<number | undefined> => {
    const query = 'INSERT INTO Trybesmith.Orders userId VALUE ?';
    const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
    return result.insertId;
  },
};

export default OrderModel;