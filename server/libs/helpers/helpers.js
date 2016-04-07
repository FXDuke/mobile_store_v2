/**
 * Created by IlyaLitvinov on 21.02.16.
 */
'use strict';

const createInput = (req) => {
    let input = {};

    if(req.body) {

        for(let key in req.body) {
            input[key] = req.body[key];
        }
    }

    if(req.query) {
        for(let key in req.query) {
            input[key] = req.query[key];
        }
    }


    return input;
};

const inputValidator = (input) => {
    //todo create validator
};
module.exports = {
    createInput
};