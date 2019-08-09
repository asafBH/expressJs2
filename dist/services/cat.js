"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const loadData_1 = require("../loadData");
//get categorries
const getCategories = () => __awaiter(this, void 0, void 0, function* () {
    const categories = yield loadData_1.loadCategories();
    return Promise.resolve(categories);
});
//get category by id
const getCategById = (id) => __awaiter(this, void 0, void 0, function* () {
    const categories = yield getCategories();
    const matching = categories.find(o => o.id === id);
    if (matching) {
        return Promise.resolve(matching);
    }
    return Promise.reject({ err: "id not found" });
});
//post new category
const addCategory = (category) => __awaiter(this, void 0, void 0, function* () {
    const categories = yield getCategories();
    category.id = uuid_1.v1();
    const products = [];
    category.products = products;
    categories.push(category);
    console.log("category added in services : " + category);
    return Promise.resolve(category);
});
//update category
const updateCategory = (category, id) => __awaiter(this, void 0, void 0, function* () {
    const matching = yield getCategById(id);
    matching.name = category.name;
    return Promise.resolve(matching);
});
//delete category
const deleteCategory = (id) => __awaiter(this, void 0, void 0, function* () {
    const categories = yield getCategories();
    const findIndex = categories.findIndex(o => o.id === id);
    if (findIndex < 0)
        return Promise.reject({ message: "Object do not exists." });
    const category = categories[findIndex];
    categories.splice(findIndex, 1);
    return Promise.resolve(category);
});
exports.default = { getCategories, getCategById, addCategory, updateCategory, deleteCategory };
//# sourceMappingURL=cat.js.map