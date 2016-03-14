'use strict';
/**
 * Comments model
 * @type {Comment|exports|module.exports}
 */
const CommentModel = require('../models/comments.model');
/**
 * Error objects
 * @type {*|exports|module.exports}
 */
const Error = require('../errors/index');

/**
 * @param {string} item_id id of item comments belong to.
 * @return {array} of comments for item
 */
const getAll = (item_id) => {
    return CommentModel.find({item_id: item_id}).then(comments => {
            return comments;
        }, () => {
           return new Error.AppError();
        });
};
/**
 * @param {string} id of comment
 */
const getOne = (id) => {
    return CommentModel.findById(id).then(res => {
        return res;
    }, () => {
        return new Error.AppError();
    })
};
/**
 * Create one comment.
 * @param {object} input - new comment object
 * { item_id: string,
 *   text: String,
 *   author: String,
 *   created_on: Date  }
 */

const setComment = (input) => {
    if(!input || typeof input !== 'object') {
        return new Error.RequestError('Comment object require');
    }
    //todo create input validator
    input.created_on = Date.now();

    return new CommentModel(input)
        .save()
        .then(res => {
            return res;
        })
        .catch(e => {
            return e;
        });
};

module.exports = {
    getAll: getAll,
    getOne:getOne,
    setComment: setComment
};