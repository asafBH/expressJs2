import { v1 as uuid } from 'uuid';
import { Product } from "../models/products";
import { loadProducts, loadCategories } from "../loadData";
import categoriesService from '../services/cat';

export const getProductsFromServ = async (): Promise<Product[]> => {
    const products = await loadProducts();
    return Promise.resolve(products);
}

export const getProductsById = async (id:string): Promise<Product> => {
    const products = await getProductsFromServ();
    const matching:Product = <Product> products.find(o => o.id === id);
    if(matching) {
        return Promise.resolve((matching as any));
    }
    return Promise.reject({err: "Id not found"});
}

const addProduct = async (product:Product):Promise<Product> => {
    const products = await loadProducts();
    const categories = await loadCategories();
    const category = categories.find(c => c.id === product.catagoryId);
    if (category) {
        product.id = uuid();
        products.push(product);
        category.products.push(product);
        return Promise.resolve(product);
    }

    return Promise.reject({message: "category id not found"});

}

const updateProduct = async(product:Product,id:string) :Promise<Product> => {
    const matching: Product = await getProductsById(id);
    const category = await categoriesService.getCategById(product.catagoryId);

    matching.catagoryId = product.catagoryId;
    matching.itemInStock = product.itemInStock;
    matching.name = product.name;

    let productInCat = category.products.find(p => p.id === matching.id);
    productInCat = matching;

    return Promise.resolve(matching);
}

const deleteProduct = async(id:string) :Promise<Product> => {
    const products = await loadProducts();
    const categories = await loadCategories();

    const findIndex = products.findIndex(o => o.id === id);
    if (findIndex < 0)
        return Promise.reject("product not found");
    const product:Product = products[findIndex];    
    products.splice(findIndex, 1);
    
    const findCatIndex = categories.findIndex(c => c.id === product.catagoryId);
    if (findCatIndex < 0)
        return Promise.reject("category not found");
    categories[findCatIndex].products.splice(categories[findCatIndex].products.indexOf(product), 1);
    
    return Promise.resolve(product);
}
export default { getProductsFromServ,getProductsById,addProduct,deleteProduct, updateProduct };
