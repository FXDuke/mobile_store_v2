/**
 * Created by IlyaLitvinov on 11.02.16.
 */
'use strict';

const util = require('util');

class BaseError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;

        if (message) {
            this.message = message;
        }
        else {
            this.message = `${this.name} Error message was not specified`;
        }
        Error.captureStackTrace(this, this.constructor.name);
    }
}

class AppError extends BaseError {
    constructor(message) {
        super(message);
        this.message = "Internal server error";
        this.httpCode = "500";
    }
}

class inValidTokenError extends BaseError {
    constructor(message) {
        super(message);
        this.message = "Invalid token error";
        this.httpCode = "401";
    }
}

class requestError extends BaseError {
    constructor(message) {
        super(message);
        this.message = message || "Bad request";
        this.httpCode = "400";
    }
}

module.exports ={
    AppError: AppError,
    invalidTokenError: inValidTokenError,
    requestError: requestError
};
