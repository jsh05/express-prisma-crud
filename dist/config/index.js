"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const envFound = dotenv_1.default.config();
if (!envFound) {
    throw new Error('.env not found');
}
exports.config = {
    port: process.env.PORT || '8080',
    jwt: {
        algorithm: process.env.JWT_ALGORITHM || 'HS256',
        secret: process.env.JWT_SECRET || '',
        expire: {
            access: parseFloat(process.env.JWT_EXPIRE_ACCESS || '0'),
            refresh: parseFloat(process.env.JWT_EXPIRE_REFRESH || '0'),
        },
    },
};
