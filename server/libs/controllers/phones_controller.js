/**
 * Created by IlyaLitvinov on 13.03.16.
 */
const PhoneModel = require('../models/phone');

const getAll = () => {
    return PhoneModel.find().then(phones => {
        return phones;
    })
    .catch(e => {
        debugger;
    })
};

const getOne = (id) => {
    return PhoneModel.findById(id).then(res => {
        return res;
    }, () => {
        return null
    })
};



module.exports = {
    getAll: getAll,
    getOne:getOne
};