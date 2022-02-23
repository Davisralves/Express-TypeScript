import User from "../interfaces/User";
import model from "../models/Users";

export default createNewUser = async (user: User) => {
  const { username, classe, level, password } = user;
  return await model.create(username, classe, level, password)
}