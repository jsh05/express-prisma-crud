"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLoader = void 0;
const express_1 = require("express");
const morgan_1 = __importDefault(require("morgan"));
const api_1 = require("@/api");
const error_handler_1 = __importDefault(require("@/api/middleware/error-handler"));
const error_res_1 = require("@/util/error-res");
const error_1 = require("@/constants/error");
const expressLoader = (app) => {
    app.use((0, express_1.json)());
    app.use((0, morgan_1.default)('dev'));
    app.use('/', api_1.router);
    app.get('/status', (req, res) => {
        return res.json({});
    });
    app.all('*', (_req, _res, next) => {
        next(new error_res_1.ErrorResponse(error_1.commonError.notFound));
    });
    app.use(error_handler_1.default);
};
exports.expressLoader = expressLoader;
