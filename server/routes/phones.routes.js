/**
 * Created by IlyaLitvinov on 13.03.16.
 */
    'use strict';
const fs = require('fs');
const path = require('path');
const Phones = require('../libs/controllers/phones.controller');
const inputHelper = require('../libs/helpers/helpers');
const url = '/phones/';

exports.getAll = (req, res, next) => {
    return Phones.getAll()
        .then(phones => {
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
        next(e);
    });
};

exports.getImage =  (req, res, next) => {
    const dirname = "public/img/phones";
    const _path = `${global.__path}/${dirname}/${req.params.file_name}`;

    res.sendFile(_path);
};