/**
 * Created by IlyaLitvinov on 13.03.16.
 */
/**
 * Created by IlyaLitvinov on 13.03.16.
 */
'use strict';
const commentController = require('../libs/controllers/comments.controller');
const inputHelper = require('../libs/helpers/create_input_object');
const url = '/phones/';

exports.getAll = (req, res, next) => {
    return commentController.getAll(req.params.item_id).then(comments => {
        res.json(comments);
    });
};

exports.getOne = (req, res, next) => {
    return Phones.getOne(req.params.id).then(phone => {
        res.json(phone);
    });
};