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
const error_1 = require("../../constants/error");
const jwt_1 = require("@/helper/jwt");
const error_res_1 = require("@/util/error-res");
const jwt_2 = require("@/util/jwt");
const validateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = (0, jwt_2.getAccessToken)(req.headers.authorization);
        // const refreshToken = getRefreshToken(req.cookies);
        if (!accessToken) {
            throw new error_res_1.ErrorResponse(error_1.commonError.unauthorized);
        }
        const jwtHelper = new jwt_1.JWTHelper();
        // const isTokenExpired = await jwtHelper.checkTokenExpiration(accessToken);
        // if (isTokenExpired) {
        //   res.redirect(303, '/api/auth?redirect=true');
        //   return;
        // }
        next();
    }
    catch (e) {
        next(e);
    }
});
exports.default = validateToken;
