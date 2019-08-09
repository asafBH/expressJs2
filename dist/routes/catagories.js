"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routVal_1 = require("../checkInfo/routVal");
const catCon_1 = __importDefault(require("../controller/catCon"));
const proCon_1 = __importDefault(require("../controller/proCon"));
const JOIvali_1 = require("../checkInfo/JOIvali");
const JOIvali_2 = require("../checkInfo/JOIvali");
//routers
const categRouter = express_1.Router();
exports.categRouter = categRouter;
const productsRouter = express_1.Router();
exports.productsRouter = productsRouter;
//************************product router ********************/
productsRouter.get("/", proCon_1.default.getProducts);
//Get product with speciefic id
productsRouter.get('/:id', routVal_1.genericValidator(JOIvali_1.schemaIdCheck, 'params'), proCon_1.default.getById);
//Add new product
productsRouter.post('/', routVal_1.genericValidator(JOIvali_1.productSchema, 'body'), proCon_1.default.addProduct);
//Update existing product
productsRouter.put('/:id', routVal_1.genericValidator(JOIvali_1.productSchema, 'body'), routVal_1.genericValidator(JOIvali_1.schemaIdCheck, 'params'), proCon_1.default.updateProduct);
//Delete product
productsRouter.delete('/:id', routVal_1.genericValidator(JOIvali_1.schemaIdCheck, 'params'), proCon_1.default.deleteProduct);
// //************************ category router ********************/
//get method for categories
categRouter.get("/", catCon_1.default.getAll);
categRouter.get('/:id', routVal_1.genericValidator(JOIvali_1.schemaIdCheck, 'params'), catCon_1.default.getById);
categRouter.get('/:id/products', routVal_1.genericValidator(JOIvali_1.schemaIdCheck, 'params'), catCon_1.default.getProductByCatId);
//Post method category
categRouter.post('/', routVal_1.genericValidator(JOIvali_2.nameSchema, 'body'), catCon_1.default.addCategory);
//Post method for Update category
categRouter.put('/:id', routVal_1.genericValidator(JOIvali_1.schemaIdCheck, 'params'), routVal_1.genericValidator(JOIvali_2.nameSchema, 'body'), catCon_1.default.updateCategory);
//Delete category
categRouter.delete('/:id', routVal_1.genericValidator(JOIvali_1.schemaIdCheck, 'params'), catCon_1.default.deleteCategory);
//# sourceMappingURL=catagories.js.map