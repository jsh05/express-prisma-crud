"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.generatePasswordHash = void 0;
const bcrypt_1 = require("bcrypt");
const generatePasswordHash = (password) => {
    return (0, bcrypt_1.hash)(password, 10);
};
exports.generatePasswordHash = generatePasswordHash;
const comparePassword = (hashedPassword, password) => {
    return (0, bcrypt_1.compare)(hashedPassword, password);
};
exports.comparePassword = comparePassword;
