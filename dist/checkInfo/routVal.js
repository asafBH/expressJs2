"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.genericValidator = (schema, bodyOrParams) => {
    return (req, res, next) => {
        const objToValidate = req[bodyOrParams];
        const result = joi_1.default.validate(objToValidate, schema);
        if (result.error !== null) {
            next(result.error);
        }
        next();
    };
};
//# sourceMappingURL=routVal.js.map