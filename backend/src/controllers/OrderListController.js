const { OrderListService } = require('../services/OrderListService');

class OrderListController {
  async create(request, response) {
    const { listas } = request.body;

    const orderListService = new OrderListService();

    const list = await orderListService.execute(listas);

    response.json(list);
  }
}

module.exports = {
  OrderListController,
};
