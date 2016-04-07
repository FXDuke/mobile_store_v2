/**
 * Created by IlyaLitvinov on 05.04.16.
 */
/**
 * Created by IlyaLitvinov on 12.03.16.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const CommentModel = require('./comments.model');
const PhoneModel = require('./phone');
const mongoose = require('mongoose');
const dbName = 'mobilestorev2-dev';

mongoose.connect(`mongodb://localhost/${dbName}`);

mongoose.set('debug', true);

function CreateCollection() {
    return PhoneModel.find({name: 'Dell Streak 7'})
        .then(phone => {
            debugger;
            const input = {
                item_id: phone[0].id,
                text: 'comment for phone',
                author: 'test author',
                created_on: new Date().getTime(),
                item_rating: 4
            };

            return new CommentModel(input).save()
        })
        .then(res => {
            const input = {
                item_id: res.id,
                text: 'comment for comment',
                author: 'test author',
                created_on: new Date().getTime(),
                item_rating: 4
            };

            return new CommentModel(input).save()
        })
        .then(res => {
            console.log(res.id);
        })
        .catch(e => {
            console.log(e);
        })



}
mongoose.connection.on('open', () => {
    mongoose.connection.db.dropCollection('comments', (err, result) => {
        mongoose.connection.db.collections().then(res => {
            //todo create auto droping db if exist
            CreateCollection()
        })
    });
});
