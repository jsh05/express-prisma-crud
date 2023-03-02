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
exports.PostRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PostRepository {
    constructor() {
        this.create = (postInfo) => __awaiter(this, void 0, void 0, function* () {
            yield prisma.post.create({
                data: Object.assign({}, postInfo),
            });
        });
        this.update = (id, postInfo) => __awaiter(this, void 0, void 0, function* () {
            yield prisma.post.update({
                where: { id },
                data: Object.assign({}, postInfo),
            });
        });
        this.find = () => __awaiter(this, void 0, void 0, function* () {
            const post = yield prisma.post.findMany();
            return post;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const postRecord = yield prisma.post.findFirst({ where: { id } });
            return postRecord;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            yield prisma.post.delete({ where: { id } });
        });
        this.findAllByUserId = (userId) => __awaiter(this, void 0, void 0, function* () {
            const userPosts = yield prisma.user.findUnique({
                where: { id: +userId },
                include: { posts: true },
            });
            return userPosts === null || userPosts === void 0 ? void 0 : userPosts.posts;
        });
    }
}
exports.PostRepository = PostRepository;
