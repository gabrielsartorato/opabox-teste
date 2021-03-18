const { Router } = require('express');

const { InterlaceController } = require('../controllers/InterlaceController');
const { OrderListController } = require('../controllers/OrderListController');

const routes = Router();

const orderListController = new OrderListController();
const interlaceController = new InterlaceController();

routes.post('/ordenaLista', orderListController.create);
routes.get('/interlace', interlaceController.show);

module.exports = { routes };
