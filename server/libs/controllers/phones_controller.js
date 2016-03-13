/**
 * Created by IlyaLitvinov on 13.03.16.
 */
const PhoneModel = require('../models/phone');

const getAll = () => {
    return PhoneModel.find().then(res => {
        debugger;
    })
    .catch(e => {
        debugger;
    })
};

module.exports = {
    getAll: getAll
};