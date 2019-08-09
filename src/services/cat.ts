import { v1 as uuid } from 'uuid';
import { loadCategories } from "../loadData";
import { Category } from '../models/categories';
import { Product } from '../models/products';

//get categorries
const getCategories = async (): Promise<Category[]> => {
    const categories = await loadCategories();
    return Promise.resolve(categories);
}

//get category by id
const getCategById = async (id: string): Promise<Category> => {
    const categories = await getCategories();
    const matching: Category = <Category>categories.find(o => o.id === id);
    if (matching) {
        return Promise.resolve(matching);
    }
    return Promise.reject({ err : "id not found" });
}

//post new category
const addCategory = async (category: Category): Promise<Category> => {
    const categories = await getCategories();
    category.id = uuid();
    const products: Product[] = [];
    category.products = products;
    categories.push(category);
    console.log("category added in services : " + category);
    return Promise.resolve(category);
}

//update category
const updateCategory = async (category: Category, id: string): Promise<Category> => {
    const matching = await getCategById(id);
    matching.name = category.name;
    return Promise.resolve(matching);
}

//delete category
const deleteCategory = async (id: string): Promise<Category> => {
    const categories = await getCategories();
    const findIndex = categories.findIndex(o => o.id === id);
    if (findIndex < 0)
        return Promise.reject({ message: "Object do not exists." });
    const category: Category = categories[findIndex];
    categories.splice(findIndex, 1);
    return Promise.resolve(category);
}

export default { getCategories, getCategById, addCategory, updateCategory, deleteCategory };