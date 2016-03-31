/**
 * Phone model
 * @type {Phone|exports|module.exports}
 */
const PhoneModel = require('../models/phone.model');
/**
 * Error class
 * @type {Error|exports|module.exports}
 */
const Error = require('../errors/index');
/**
 * Get all catalog of phones
 * @returns {Promise.resolve|phones}
 */
const getAll = () => {
    return PhoneModel.find()
        .then(phones => {
            return phones.map(item => {
                return {
                    _id: item._id,
                    name: item.name,
                    price: item.price,
                    imgUrl: item.images[0],
                    description: `${item.description[0].slice(0, 100)}...`
                };
            });
        })
        .catch(e => {
            return e;
        });
};
/**
 * Get one phone by id
 * @param id
 * @returns {Promise|*|Promise.<T>}
 */
const getOne = (id) => {
    return PhoneModel.findById(id)
        .then(phone => {
            return phone;
        })
        .catch((e) => {
            return e;
        });
};

module.exports = {
    getAll: getAll,
    getOne: getOne
};