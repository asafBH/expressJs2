"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const catagories_1 = require("./routes/catagories");
const catagories_2 = require("./routes/catagories");
const log_1 = require("./middleware/log");
const error_1 = require("./middleware/error");
const path_1 = __importDefault(require("path"));
const app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
console.log(path_1.default.join(__dirname, 'static'));
app.use('/public', express_1.default.static(path_1.default.join(__dirname, 'static')));
app.use(log_1.logMiddleware);
app.use('/products', catagories_1.productsRouter);
app.use('/categories', catagories_2.categRouter);
app.use(error_1.genericValidatorHandler);
app.use(error_1.clientErrorHandler);
app.use(error_1.errorHandler);
// In the end if we couldn't catch the error with other handlers
app.use(error_1.logErrors);
//# sourceMappingURL=app.js.map