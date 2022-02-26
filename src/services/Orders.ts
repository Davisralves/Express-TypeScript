import OrderModel from '../models/Orders';

const OrderService = {
  registerOrder: async (userId: number): Promise<number | undefined> => 
    OrderModel.registerOrder(userId),

};

export default OrderService;