"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTHelper = void 0;
const config_1 = require("../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWTHelper {
    constructor() {
        this.algorithm = config_1.config.jwt.algorithm;
        this.secret = config_1.config.jwt.secret;
        this.accessExpiresInSeconds = config_1.config.jwt.expire.access * 3600;
        this.refreshExpiresInSeconds = config_1.config.jwt.expire.refresh * 3600;
    }
    generateAccessToken({ userId }) {
        const jwtOptions = {
            algorithm: this.algorithm,
            expiresIn: this.accessExpiresInSeconds,
            subject: 'ACCESS_TOKEN',
        };
        return jsonwebtoken_1.default.sign({ userId }, this.secret, jwtOptions);
    }
    generateRefreshToken({ userId }) {
        const jwtOptions = {
            algorithm: this.algorithm,
            expiresIn: this.refreshExpiresInSeconds,
            subject: 'REFRESH_TOKEN',
        };
        return jsonwebtoken_1.default.sign({ userId }, this.secret, jwtOptions);
    }
    generateJwtTokens(payload) {
        const access = this.generateAccessToken(payload);
        const refresh = this.generateRefreshToken(payload);
        return { access, refresh };
    }
    decodeJwtToken(token, subject) {
        const decodedToken = jsonwebtoken_1.default.verify(token, this.secret, {
            algorithms: [this.algorithm],
            subject,
        });
        return decodedToken;
    }
    decodeAccessToken(token) {
        return this.decodeJwtToken(token, 'ACCESS_TOKEN');
    }
    decodeRefreshToken(token) {
        return this.decodeJwtToken(token, 'REFRESH_TOKEN');
    }
}
exports.JWTHelper = JWTHelper;
