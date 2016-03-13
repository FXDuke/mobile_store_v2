/**
 * Created by IlyaLitvinov on 10.02.16.
 */
'use strict';
//const signInController = require('../controllers/signin_controller.js');
const phonesController = require('../libs/controllers/phones_controller');

const routes = (router) => {
    router.get('/api/v1/phones', phonesController.getAll);
};

module.exports = routes;