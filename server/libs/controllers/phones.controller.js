/**
 * Phone model
 * @type {Phone|exports|module.exports}
 */
const PhoneModel = require('../models/phone.model');
const CommentModel = require('../models/comments.model');
/**
 * Error class
 * @type {Error|exports|module.exports}
 */
const Error = require('../errors/index');


const getAverageRating = (id) => {
    return new Promise((res, rej) => {
        return CommentModel.find({item_id: id})
            .then(items => {
                console.log(id);
                var average_rating = items.reduce(function (average_rating, item, i, arr) {
                    average_rating +=item.item_rating;
                    if(i === arr.length-1) {
                        average_rating = average_rating/arr.length;
                    }
                   return average_rating;
                }, 0);

                res(Math.round(average_rating*100)/100);
            })
    });

};
/**
 * Get all catalog of phones
 * @returns {Promise.resolve|phones}
 */
const getAll = () => {
    return PhoneModel.find()
        .then(phones => {
            var promises = [];

            phones.forEach(item => {
                promises.push(
                    new Promise((res, rej) => {
                        return getAverageRating(item._id).then(rating => {
                            item.average_rating = rating;
                            res(item);
                        })
                    })
                );
            });

            return Promise.all(promises).then(phones => {
                debugger;
                return phones.map(item => {
                    return {
                        _id: item._id,
                        name: item.name,
                        price: item.price,
                        imgUrl: item.images[0],
                        description: `${item.description[0].slice(0, 100)}...`,
                        average_rating: item.average_rating
                    };
                });
            }).catch(e => {
                debugger;
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
        .lean()
        .then(phone => {
            return getAverageRating(id)
                .then(rating => {
                    phone.average_rating = rating;
                    return phone;
                })
        })
        .catch((e) => {
            return e;
        });
};

module.exports = {
    getAll: getAll,
    getOne: getOne
};