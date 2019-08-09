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
const cat_1 = __importDefault(require("../services/cat"));
//get all categories
const getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const categories = yield cat_1.default.getCategories();
        res.send(categories);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
//get category by id 
const getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const category = yield cat_1.default.getCategById(req.params.id);
        res.send(category);
    }
    catch (err) {
        res.status(404).send(err);
    }
});
//get all products of category
const getProductByCatId = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const products = yield cat_1.default.getCategById(req.params.id);
        console.log(typeof products);
        res.send(products);
    }
    catch (err) {
        res.status(404).send(err);
    }
});
//post new category from service object
const addCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const categoryToAdd = yield cat_1.default.addCategory(req.body);
        res.status(201).send(categoryToAdd);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
//update category from service object
const updateCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const categoryToUpdate = yield cat_1.default.updateCategory(req.body, req.params.id);
        res.status(201).send(categoryToUpdate);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
//delete category from service object
const deleteCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const category = yield cat_1.default.deleteCategory(req.params.id);
        res.send(category);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
exports.default = { getAll, getById, addCategory, updateCategory, deleteCategory, getProductByCatId };
//# sourceMappingURL=catCon.js.map