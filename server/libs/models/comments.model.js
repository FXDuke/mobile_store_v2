/**
 * @module phones model
 */
const mongoose = require('./mongoose');
/**
 * created Schema object for mongoose
 */
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    item_id:  {
        type: Schema.Types.ObjectId,
        required:true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    created_on: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
