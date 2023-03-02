"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessToken = void 0;
const getAccessToken = (authorization) => {
    if (authorization && authorization.startsWith('Bearer ')) {
        return authorization.split(' ')[1];
    }
    return '';
};
exports.getAccessToken = getAccessToken;
