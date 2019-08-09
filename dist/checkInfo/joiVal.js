"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
function getThrow(value, schema) {
    const { error, value: v } = joi_1.default.validate(value, schema);
    if (error) {
        throw error;
    }
    return v;
}
exports.getThrow = getThrow;
//# sourceMappingURL=joiVal.js.map