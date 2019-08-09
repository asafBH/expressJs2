import { Request, Response } from 'express'
import { Product } from '../models/products';
import productsService from '../services/productServ';

//get products
const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await productsService.getProductsFromServ();
        res.send(products);
    } catch (err) {
        res.status(400).send(err);
    }
}
//get product by id from service object
const getById = async (req: Request, res: Response) => {
    try {
        const product = await productsService.getProductsById(req.params.id);
        res.send(product);
    } catch (err) {
        res.status(400).send(err);
    }
}
//post new product from service object
const addProduct = async (req: Request, res: Response) => {
    try {
        const productToAdd = await productsService.addProduct(req.body as Product);
        res.status(201).send(productToAdd);
    } catch (err) {
        res.status(409).send(err);
    }
}
// update product from service object
const updateProduct = async (req: Request, res: Response) => {
    try {
        const productToUpdate = await productsService.updateProduct(req.body as Product, req.params.id);
        res.status(201).send(productToUpdate);
    } catch (err) {
        res.status(400).send(err);
    }
}

//delete product from service object
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const product = await productsService.deleteProduct(req.params.id);
        res.send(product);
    } catch (err) {
        res.status(204).send(err);
    }
}
export default { getProducts, getById, addProduct, deleteProduct, updateProduct };