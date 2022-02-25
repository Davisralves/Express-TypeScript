import User from '../interfaces/User';
import model from '../models/Users';

const UserService = {
  createNewUser: async (user: User) => {
    const { username, classe, level, password } = user;
    return model.create(username, classe, level, password);
  },

  getUserId: async (username: string, password: string): Promise<number | void> => {
    const result = await model.getUserId(username, password);
    if (result[0]) {
      return result[0].id as number;
    }
  },

};

export default UserService;
