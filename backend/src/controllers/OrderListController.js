const { OrderListService } = require('../services/OrderListService');

class OrderListController {
  async create(request, response) {
    try {
      const { listas } = request.body;

      const orderListService = new OrderListService();

      const list = await orderListService.execute(listas);

      response.json(list);
    } catch (err) {
      return response.json(err.message);
    }
  }
}

module.exports = {
  OrderListController,
};
