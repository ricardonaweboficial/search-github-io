const { Router } = require('express');
const DevControllers = require('./controllers/DevController');

const routes = Router();

routes.get('/', DevControllers.index);
routes.get('/users/:github_username', DevControllers.show);
routes.post('/users', DevControllers.store);
routes.put('/users/:_id', DevControllers.update);
routes.delete('/users/:id', DevControllers.destroy);

module.exports = routes;