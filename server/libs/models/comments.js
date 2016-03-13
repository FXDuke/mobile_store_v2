/**
 * Created by IlyaLitvinov on 13.03.16.
 */
const mongoose = require('./mongoose');

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
    date: {
        type: Date,
        required: true
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
