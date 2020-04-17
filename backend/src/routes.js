const { Router } = require('express');
const DevControllers = require('./controllers/DevController');

const routes = Router();

routes.post('/users', DevControllers.store);

module.exports = routes;