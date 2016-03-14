/**
 * Created by IlyaLitvinov on 11.02.16.
 */
'use strict';

const util = require('util');

/**
 * Extends base node error class
 */
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

class InValidTokenError extends BaseError {
    constructor(message) {
        super(message);
        this.message = "Invalid token error";
        this.httpCode = "401";
    }
}

class RequestError extends BaseError {
    constructor(message) {
        super(message);
        this.message = message || "Bad request";
        this.httpCode = "400";
    }
}

class NotFound extends BaseError {
    constructor(message) {
        super(message);
        this.message = message || "Not found";
        this.httpCode = "404";
    }
}

module.exports ={
    BaseError: BaseError,
    AppError: AppError,
    InvalidTokenError: InValidTokenError,
    RequestError: RequestError,
    NotFound: NotFound
};
