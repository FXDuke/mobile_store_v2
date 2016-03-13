/**
 * Created by IlyaLitvinov on 13.03.16.
 */
const CommentModel = require('../models/comments');

const getAll = (item_id) => {
    return CommentModel.find({item_id: item_id}).then(comments => {
            return comments;
        })
        .catch(e => {
           //todo create error handlers
        })
};

const getOne = (id) => {
    return CommentModel.findById(id).then(res => {
        return res;
    }, () => {
        return null
    })
};

const create = (comment) => {
    //todo adding to db
};


module.exports = {
    getAll: getAll,
    getOne:getOne
};