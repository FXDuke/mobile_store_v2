/**
 * Created by IlyaLitvinov on 13.03.16.
 */
const mongoose = require('mongoose');
const config = require('../config/config.js');

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;