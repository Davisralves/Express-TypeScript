import User from '../interfaces/User';
import model from '../models/Users';

interface UserId {
  id: number;
}

const UserService = {
  createNewUser: async (user: User) => {
    const { username, classe, level, password } = user;
    return model.create(username, classe, level, password);
  },

  getUserId: async (username: string) => {
    const result: UserId = await model.getUserId(username);
    console.log(result.id);
    return result.id;
  },

};

export default UserService;
