"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.schemaIdCheck = joi_1.default.object().keys({
    id: joi_1.default.string().length(36)
});
const nameMinNumOfChars = 3;
exports.nameSchema = joi_1.default.object().keys({
    name: joi_1.default.string().min(nameMinNumOfChars).required()
});
exports.productSchema = joi_1.default.object().keys({
    name: joi_1.default.string().min(nameMinNumOfChars).required(),
    catagoryId: joi_1.default.string().length(36),
    itemInStock: joi_1.default.number().required()
});
//# sourceMappingURL=JOIvali.js.map