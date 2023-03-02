"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.findByIdPost = exports.findPost = exports.createPost = void 0;
const jwt_1 = require("@/helper/jwt");
const post_1 = require("@/service/post");
const jwt_2 = require("@/util/jwt");
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { create } = new post_1.PostService();
        const accessToken = (0, jwt_2.getAccessToken)(req.headers.authorization);
        const { userId } = new jwt_1.JWTHelper().decodeAccessToken(accessToken);
        yield create(Object.assign({ authorId: userId }, req.body));
        res.json({});
    }
    catch (e) {
        next(e);
    }
});
exports.createPost = createPost;
const findPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { find } = new post_1.PostService();
        const post = yield find();
        res.json(post);
    }
    catch (e) {
        next(e);
    }
});
exports.findPost = findPost;
const findByIdPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { findById } = new post_1.PostService();
        const id = Number(req.params.id);
        const postRecord = yield findById(id);
        res.json(postRecord);
    }
    catch (e) {
        next(e);
    }
});
exports.findByIdPost = findByIdPost;
const updatePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { update } = new post_1.PostService();
        const id = Number(req.params.id);
        yield update(id, req.body);
        res.json({});
    }
    catch (e) {
        next(e);
    }
});
exports.updatePost = updatePost;
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { delete: deletePost } = new post_1.PostService();
        const id = Number(req.params.id);
        yield deletePost(id);
        res.json({});
    }
    catch (e) {
        next(e);
    }
});
exports.deletePost = deletePost;
