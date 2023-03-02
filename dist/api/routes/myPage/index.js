"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myPageRouter = void 0;
const validate_token_1 = __importDefault(require("@/api/middleware/validate-token"));
const express_1 = require("express");
const myPage_controller_1 = require("./myPage.controller");
exports.myPageRouter = (0, express_1.Router)();
exports.myPageRouter.get('/post', validate_token_1.default, myPage_controller_1.getMyPost);
