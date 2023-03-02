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
exports.AuthService = void 0;
const error_1 = require("@/constants/error");
const jwt_1 = require("@/helper/jwt");
const user_1 = require("@/repository/user");
const error_res_1 = require("@/util/error-res");
const hash_1 = require("@/util/hash");
class AuthService {
    constructor() {
        this.signIn = (signInInfo) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByUser(signInInfo.email);
            if (!user) {
                throw new error_res_1.ErrorResponse(error_1.commonError.unauthorized);
            }
            const isValid = (0, hash_1.comparePassword)(user.password, signInInfo.password);
            if (!isValid) {
                throw new error_res_1.ErrorResponse(error_1.commonError.unauthorized);
            }
            const tokens = this.JWTHelper.generateJwtTokens({ userId: user.id });
            return tokens;
        });
        this.signUp = (signUpInfo) => __awaiter(this, void 0, void 0, function* () {
            const alreadyUser = yield this.userRepository.findByUser(signUpInfo.email);
            if (alreadyUser) {
                throw new error_res_1.ErrorResponse(error_1.commonError.conflict);
            }
            const hashedPassword = yield (0, hash_1.generatePasswordHash)(signUpInfo.password);
            const userRecord = yield this.userRepository.createUser(Object.assign(Object.assign({}, signUpInfo), { password: hashedPassword }));
            return userRecord;
        });
        this.userRepository = new user_1.UserRepository();
        this.JWTHelper = new jwt_1.JWTHelper();
    }
}
exports.AuthService = AuthService;
