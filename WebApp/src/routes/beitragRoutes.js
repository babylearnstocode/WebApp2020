const express = require('express');
const beitraegeControllers = require('../controllers/beitraegeController');
const routes = express.Router();

routes
  .route('/')
  .get(beitraegeControllers.getAllBeitraege)
  .post(beitraegeControllers.createBeitraege);

routes
  .route('/:id')
  .get(beitraegeControllers.getBeitrag)
  .delete(beitraegeControllers.deleteBeitrag)
  .patch(beitraegeControllers.updateBeitrag);

module.exports = routes;
