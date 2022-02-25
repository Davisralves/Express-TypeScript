import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

interface UserId extends RowDataPacket {
  id: number;
}

const model = {
  create: async (username: string, classe: string, level: number, password: string) => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`; 
    const [result] = await connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    const { insertId } = result;
    return insertId;
  },

  getUserId: async (username: string, password: string): Promise<UserId> => {
    const query = 'SELECT id FROM Trybesmith.Users WHERE username=? AND password=? ';
    const [result] = await connection.execute(query, [username, password]) as RowDataPacket[];
    return result as UserId;
  },

};

export default model;