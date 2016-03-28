/**
 * Created by IlyaLitvinov on 10.02.16.
 */
'use strict';

const phones = require('./phones.routes');
const comments = require('./comments.routes');

const routes = (router) => {
    router.get('/api/v1/phones', phones.getAll);
    router.get('/api/v1/img/phones/:file_name', phones.getImage);
    router.get('/api/v1/phones/:id', phones.getOne);
    router.get('/api/v1/comments/:item_id', comments.getAll);
    router.post('/api/v1/comments', comments.setComments);
};

module.exports = routes;