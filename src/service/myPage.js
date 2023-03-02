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
exports.MyPageService = void 0;
const post_1 = require("@/repository/post");
class MyPageService {
    constructor() {
        this.getMyPost = (userId) => __awaiter(this, void 0, void 0, function* () {
            const userPosts = yield this.postRepository.findAllByUserId(userId);
            return userPosts;
        });
        this.postRepository = new post_1.PostRepository();
    }
}
exports.MyPageService = MyPageService;
