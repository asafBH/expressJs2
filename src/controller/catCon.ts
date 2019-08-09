import { Request, Response } from 'express';
import { Category } from '../models/categories';
import categoryService from '../services/cat';

//get all categories
const getAll = async (req: Request, res: Response) => {
    try {
        const categories = await categoryService.getCategories();
        res.send(categories);
    } catch (err) {
        res.status(400).send(err);
    }
}

//get category by id 
const getById = async (req: Request, res: Response) => {
    try {
        const category = await categoryService.getCategById(req.params.id);
        res.send(category);
    } catch (err) {
        res.status(404).send(err);
    }
}

//get all products of category
const getProductByCatId = async (req: Request, res: Response) => {
    try{
        const products = await categoryService.getCategById(req.params.id);
        res.send(products.products);
    } catch(err){
        
        res.status(404).send(err);
    }
}
//post new category from service object
const addCategory = async (req: Request, res: Response) => {
    try{
        const categoryToAdd = await categoryService.addCategory(req.body as Category);
        res.status(201).send(categoryToAdd);
    } catch(err){
        res.status(400).send(err);
    }
}
//update category from service object
const updateCategory = async (req: Request, res: Response) => {
    try {
        const categoryToUpdate = await categoryService.updateCategory(req.body as Category, req.params.id);
        res.status(201).send(categoryToUpdate);
    } catch (err) {
        res.status(400).send(err);
    }
}

//delete category from service object
const deleteCategory = async (req: Request, res: Response) => {
    try {
        const category = await categoryService.deleteCategory(req.params.id);
        res.send(category);
    } catch (err) {
        res.status(400).send(err);
    }
}
export default { getAll, getById, addCategory, updateCategory, deleteCategory, getProductByCatId };