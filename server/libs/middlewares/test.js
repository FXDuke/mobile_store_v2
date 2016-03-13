/**
 * Created by IlyaLitvinov on 11.02.16.
 */
const AppError = require('../errors/index').AppError;

module.exports = (req, res, next) => {
    if(!req.query.access ) {
       next(new AppError('test'));
    }
};