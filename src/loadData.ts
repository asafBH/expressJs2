const fetch = require('node-fetch');
import uuidv1 from 'uuid/v1';
import { Category } from './models/categories';
import { Product } from './models/products';

//empty arrays for read and write
export const categories: Category[] = [];
export const products: Product[] = [];

//initialize array with uuid
export const loadcategoriesJsonFile = async (PORT:string) => {
    const catgObject = await fetch('http://localhost:'+PORT+'/public/productList.json');
    const obj = await catgObject.json();
    obj.Categories.forEach(function (catg: any) {
        catg.id = uuidv1();
        catg.products.forEach(function (prod: any) {
            prod.id = uuidv1();
            prod.catagoryId = catg.id;
            products.push(prod);
        });
        categories.push(catg);
    });
}


export function loadProducts(): Promise<Product[]> {
    return Promise.resolve(products);
}

export function loadCategories(): Promise<Category[]> {
    return Promise.resolve(categories);
}

