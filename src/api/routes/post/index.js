"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const validate_token_1 = __importDefault(require("@/api/middleware/validate-token"));
const express_1 = require("express");
const post_controller_1 = require("./post.controller");
exports.postRouter = (0, express_1.Router)();
exports.postRouter.post('/', validate_token_1.default, post_controller_1.createPost);
exports.postRouter.get('/', post_controller_1.findPost);
exports.postRouter.get('/:id', post_controller_1.findByIdPost);
exports.postRouter.patch('/:id', validate_token_1.default, post_controller_1.updatePost);
exports.postRouter.delete(':/id', validate_token_1.default, post_controller_1.deletePost);
