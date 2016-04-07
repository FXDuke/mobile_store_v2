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
    return CommentModel.find({}).then(allComments => {
            return allComments.filter(comment => {
                return comment.item_id.toString() === item_id;
            });
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
 *   created_on: Date,
 *   point: Number}
 */

const setComment = (input) => {
    if(!input || typeof input !== 'object') {
        return new Error.RequestError('Comment object require');
    }
    //todo create input validator
    input.created_on = Date.now();

    return saveComment(input)
        .then((newComment) => {
            if(input.parent_id) {
                var subCommentId = newComment.id;

                return CommentModel.findById(input.parent_id).then(comment => {
                    comment.subcomment_ids = comment.subcomment_ids || [];

                    comment.subcomment_ids.push(subCommentId);
                    return comment.save();

                })
            }

            return newComment
        })

};

function saveComment (input) {
    return new CommentModel(input)
        .save()
        .then(res => {
            return res;
        })
        .catch(e => {
            return e;
        });
}

module.exports = {
    getAll: getAll,
    getOne:getOne,
    setComment: setComment
};