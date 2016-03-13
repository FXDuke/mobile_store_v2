/**
 * Created by IlyaLitvinov on 10.02.16.
 */
'use strict';

const phones = require('./phones.routes');
const comments = require('./comments.routes');

const routes = (router) => {
    router.get('/api/v1/phones', phones.getAll);
    router.get('/api/v1/phones/:id', phones.getOne);
    router.get('/api/v1/comments/:item_id', comments.getAll);
    //router.get('/api/v1/phones/:id', phones.getOne);
};

module.exports = routes;