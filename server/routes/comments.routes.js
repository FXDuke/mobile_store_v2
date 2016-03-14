/**
 * Created by IlyaLitvinov on 13.03.16.
 */
/**
 * Created by IlyaLitvinov on 13.03.16.
 */
'use strict';
const commentsController = require('../libs/controllers/comments.controller');
const phonesController = require('../libs/controllers/phones.controller');
const createInputObject = require('../libs/helpers/helpers').createInput;
const url = '/phones/';

const getAll = (req, res, next) => {
    return commentsController
        .getAll(req.params.item_id)
        .then(comments => {
            res.json(comments);
        });
};

const getOne = (req, res, next) => {
    return phonesController.getOne(req.params.id).then(phone => {
        res.json(phone);
    });
};


const setComments = (req, res, next) => {
    return commentsController
        .setComment(createInputObject(req))
        .then( _res => {
            res.json(_res);
        })
        .catch(e => {
            next(e);
        })
};

module.exports = {
    getAll: getAll,
    getOne: getOne,
    setComments: setComments
};
