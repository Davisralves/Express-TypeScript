import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const model = {
  create: async (username: string, classe: string, level: number, password: string) => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`; 
    const [result] = await connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    const { insertId } = result;
    return insertId;
  },

  git adddgetUserId: async (username: string) => {
    const query = 'SELECT id FROM Trybesmith.Users WHERE username=?';
    const [result] = await connection.execute(query, [username]) as ResultSetHeader[];
    return result;
  },

};

export default model;