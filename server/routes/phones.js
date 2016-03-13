/**
 * Created by IlyaLitvinov on 13.03.16.
 */
const Phones = require('../libs/controllers/phones_controller');
const inputHelper = require('../libs/helpers/create_input_object');
const url = '/phones/';

exports.getAll = (req, res, next) => {
    return Phones.getAll().then(phones => {
        res.json(phones);
    });
};

exports.getOne = (req, res, next) => {
    return Phones.getOne(req.params.id).then(phone => {
        res.json(phone);
    });
};