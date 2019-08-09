"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productServ_1 = __importDefault(require("../services/productServ"));
//get products
const getProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const products = yield productServ_1.default.getProductsFromServ();
        res.send(products);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
//get product by id from service object
const getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const product = yield productServ_1.default.getProductsById(req.params.id);
        res.send(product);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
//post new product from service object
const addProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const productToAdd = yield productServ_1.default.addProduct(req.body);
        res.status(201).send(productToAdd);
    }
    catch (err) {
        res.status(409).send(err);
    }
});
// update product from service object
const updateProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const productToUpdate = yield productServ_1.default.updateProduct(req.body, req.params.id);
        res.status(201).send(productToUpdate);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
//delete product from service object
const deleteProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const product = yield productServ_1.default.deleteProduct(req.params.id);
        res.send(product);
    }
    catch (err) {
        res.status(204).send(err);
    }
});
exports.default = { getProducts, getById, addProduct, deleteProduct, updateProduct };
//# sourceMappingURL=proCon.js.map