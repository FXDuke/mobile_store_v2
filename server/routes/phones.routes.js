/**
 * Created by IlyaLitvinov on 13.03.16.
 */
    'use strict';
const Phones = require('../libs/controllers/phones.controller');
const inputHelper = require('../libs/helpers/helpers');
const url = '/phones/';

exports.getAll = (req, res, next) => {
    return Phones.getAll()
        .then(phones => {
            phones = phones.map(item => {
                return {
                    _id: item._id,
                    name: item.name,
                    price: item.price
                };
            });

            res.status(200);
            res.json(phones);
        })
        .catch( e => {
           next(e);
        });
};

exports.getOne = (req, res, next) => {
    return Phones.getOne(req.params.id).then(phone => {
        res.status(200);
        res.json(phone);
    }).catch(e => {
        return e;
    });
};