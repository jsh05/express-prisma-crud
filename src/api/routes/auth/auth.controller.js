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
exports.signIn = exports.createUser = void 0;
const auth_1 = require("@/service/auth");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { signUp } = new auth_1.AuthService();
        yield signUp(req.body);
        res.status(201).json({});
    }
    catch (e) {
        next(e);
    }
});
exports.createUser = createUser;
const signIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { signIn } = new auth_1.AuthService();
        const { access, refresh } = yield signIn(req.body);
        res.json({ access, refresh });
    }
    catch (e) {
        next(e);
    }
});
exports.signIn = signIn;
