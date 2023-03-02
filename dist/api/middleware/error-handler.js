"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("@/constants/error");
const error_res_1 = require("@/util/error-res");
const createErrorInfoDevelopment = (err) => {
    return {
        success: false,
        statusCode: (err === null || err === void 0 ? void 0 : err.statusCode) || 500,
        message: err.message,
        stack: err.stacks || err.stack,
    };
};
const createErrorInfoProduction = (err) => {
    return {
        success: false,
        statusCode: (err === null || err === void 0 ? void 0 : err.statusCode) || error_1.commonError.wrong.statusCode,
        message: err.isOperational ? err.message : error_1.commonError.wrong.message,
    };
};
const errorHandler = (err, _req, res, _next) => {
    let errorInfo;
    let errorResponse = err;
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (errorResponse.name === 'UnauthorizedError') {
        errorResponse = new error_res_1.ErrorResponse(error_1.commonError.unauthorized);
    }
    if (isDevelopment) {
        errorInfo = createErrorInfoDevelopment(errorResponse);
    }
    else {
        errorInfo = createErrorInfoProduction(errorResponse);
    }
    res.status(errorInfo.statusCode).json(errorInfo);
};
exports.default = errorHandler;
