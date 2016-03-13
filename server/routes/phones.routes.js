/**
 * Created by IlyaLitvinov on 13.03.16.
 */
    'use strict';
const Phones = require('../libs/controllers/phones.controller');
const inputHelper = require('../libs/helpers/create_input_object');
const url = '/phones/';

exports.getAll = (req, res, next) => {
    return Phones.getAll().then(phones => {
        phones = phones.map(item => {
            return {
                _id: item._id,
                name: item.name,
                price: item.price
            };
        });

        res.json(phones);
    });
};

exports.getOne = (req, res, next) => {
    return Phones.getOne(req.params.id).then(phone => {
        res.json(phone);
    });
};