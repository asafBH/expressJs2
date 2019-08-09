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
const uuid_1 = require("uuid");
const loadData_1 = require("../loadData");
const cat_1 = __importDefault(require("../services/cat"));
exports.getProductsFromServ = () => __awaiter(this, void 0, void 0, function* () {
    const products = yield loadData_1.loadProducts();
    return Promise.resolve(products);
});
exports.getProductsById = (id) => __awaiter(this, void 0, void 0, function* () {
    const products = yield exports.getProductsFromServ();
    const matching = products.find(o => o.id === id);
    if (matching) {
        return Promise.resolve(matching);
    }
    return Promise.reject({ message: "Id not found" });
});
const addProduct = (product) => __awaiter(this, void 0, void 0, function* () {
    const products = yield loadData_1.loadProducts();
    const categories = yield loadData_1.loadCategories();
    const category = categories.find(c => c.id === product.catagoryId);
    if (category) {
        product.id = uuid_1.v1();
        products.push(product);
        category.products.push(product);
        return Promise.resolve(product);
    }
    return Promise.reject({ message: "category id not found" });
});
const updateProduct = (product, id) => __awaiter(this, void 0, void 0, function* () {
    const matching = yield exports.getProductsById(id);
    const category = yield cat_1.default.getCategById(product.catagoryId);
    matching.catagoryId = product.catagoryId;
    matching.itemInStock = product.itemInStock;
    matching.name = product.name;
    let productInCat = category.products.find(p => p.id === matching.id);
    productInCat = matching;
    return Promise.resolve(matching);
});
const deleteProduct = (id) => __awaiter(this, void 0, void 0, function* () {
    const products = yield loadData_1.loadProducts();
    const categories = yield loadData_1.loadCategories();
    const findIndex = products.findIndex(o => o.id === id);
    if (findIndex < 0)
        return Promise.reject("Object do not exists.");
    const product = products[findIndex];
    products.splice(findIndex, 1);
    const findCatIndex = categories.findIndex(c => c.id === product.catagoryId);
    if (findCatIndex < 0)
        return Promise.reject("Object do not exists.");
    categories[findCatIndex].products.splice(categories[findCatIndex].products.indexOf(product), 1);
    return Promise.resolve(product);
});
exports.default = { getProductsFromServ: exports.getProductsFromServ, getProductsById: exports.getProductsById, addProduct, deleteProduct, updateProduct };
//# sourceMappingURL=productServ.js.map