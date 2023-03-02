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
exports.getMyPost = void 0;
const jwt_1 = require("@/helper/jwt");
const myPage_1 = require("@/service/myPage");
const jwt_2 = require("@/util/jwt");
const getMyPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { getMyPost } = new myPage_1.MyPageService();
        const accessToken = (0, jwt_2.getAccessToken)(req.headers.authorization);
        const { userId } = new jwt_1.JWTHelper().decodeAccessToken(accessToken);
        const userPosts = yield getMyPost(`${userId}`);
        res.json(userPosts);
    }
    catch (e) {
        next(e);
    }
});
exports.getMyPost = getMyPost;
