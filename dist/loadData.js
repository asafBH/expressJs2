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
const fetch = require('node-fetch');
const v1_1 = __importDefault(require("uuid/v1"));
//empty arrays for read and write
exports.categories = [];
exports.products = [];
//initialize array with uuid
exports.loadcategoriesJsonFile = (PORT) => __awaiter(this, void 0, void 0, function* () {
    const catgObject = yield fetch('http://localhost:' + PORT + '/public/productList.json');
    const obj = yield catgObject.json();
    obj.Categories.forEach(function (catg) {
        catg.id = v1_1.default();
        catg.products.forEach(function (prod) {
            prod.id = v1_1.default();
            prod.catagoryId = catg.id;
            exports.products.push(prod);
        });
        exports.categories.push(catg);
    });
});
function loadProducts() {
    return Promise.resolve(exports.products);
}
exports.loadProducts = loadProducts;
function loadCategories() {
    return Promise.resolve(exports.categories);
}
exports.loadCategories = loadCategories;
//# sourceMappingURL=loadData.js.map