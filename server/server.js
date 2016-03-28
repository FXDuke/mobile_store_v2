/**
 * Created by IlyaLitvinov on 10.02.16.
 */

'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require('path');
const app = express();
const config = require('./libs/config/config');
const port = config.get('port');
const routes = require('./routes/index');

const testMw = require('./libs/middlewares/test');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist'));

//app.get('/', (req, res) => {
//    res.sendFile('index.html');
//});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(app);

global.__path = __dirname;
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://localhost:'+port);
});