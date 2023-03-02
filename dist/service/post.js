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
exports.PostService = void 0;
const error_1 = require("@/constants/error");
const post_1 = require("@/repository/post");
const error_res_1 = require("@/util/error-res");
class PostService {
    constructor() {
        this.create = (postInfo) => __awaiter(this, void 0, void 0, function* () {
            yield this.postRepository.create(postInfo);
        });
        this.update = (postId, postInfo) => __awaiter(this, void 0, void 0, function* () {
            yield this.postRepository.update(postId, postInfo);
        });
        this.find = () => __awaiter(this, void 0, void 0, function* () {
            const post = yield this.postRepository.find();
            return post;
        });
        this.findById = (postId) => __awaiter(this, void 0, void 0, function* () {
            const postRecord = yield this.postRepository.findById(postId);
            if (!postRecord) {
                throw new error_res_1.ErrorResponse(error_1.commonError.notFound);
            }
            return postRecord;
        });
        this.delete = (postId) => __awaiter(this, void 0, void 0, function* () {
            yield this.postRepository.delete(postId);
        });
        this.postRepository = new post_1.PostRepository();
    }
}
exports.PostService = PostService;
