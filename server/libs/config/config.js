/**
 * Created by IlyaLitvinov on 10.02.16.
 */
'use strict';
const path = require('path');
const nconf = require('nconf');
const NODE_ENV = process.env.NODE_ENV;

nconf.argv()
    .env()
    .file({ file: path.join(__dirname, 'config.json')});

if(NODE_ENV === 'dev') {
    nconf.set('port', '5000');
}
module.exports = nconf;
