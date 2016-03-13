/**
 * Created by IlyaLitvinov on 10.02.16.
 */
'use strict';

const phones = require('./phones');

const routes = (router) => {
    router.get('/api/v1/phones', phones.getAll);
    router.get('/api/v1/phones/:id', phones.getOne);
};

module.exports = routes;