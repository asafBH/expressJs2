import { Router } from 'express';
import { genericValidator } from '../checkInfo/routVal';
import categoriesController from '../controller/catCon';
import productsController from '../controller/proCon';
import { schemaIdCheck, productSchema } from '../checkInfo/JOIvali';
import { nameSchema } from '../checkInfo/JOIvali';

//routers
const categRouter = Router();
const productsRouter = Router();

//************************product router ********************/

productsRouter.get("/", productsController.getProducts);
//Get product with speciefic id
productsRouter.get('/:id', genericValidator(schemaIdCheck, 'params'), productsController.getById);
//Add new product
productsRouter.post('/', genericValidator(productSchema, 'body'), productsController.addProduct);
//Update existing product
productsRouter.put('/:id', genericValidator(productSchema, 'body'), genericValidator(schemaIdCheck, 'params'), productsController.updateProduct);
//Delete product
productsRouter.delete('/:id', genericValidator(schemaIdCheck, 'params'), productsController.deleteProduct);


// //************************ category router ********************/


//get method for categories
categRouter.get("/", categoriesController.getAll);
//get method by id for categories
categRouter.get('/:id', genericValidator(schemaIdCheck, 'params'), categoriesController.getById);
//get method for products of categories
categRouter.get('/:id/products', genericValidator(schemaIdCheck, 'params'), categoriesController.getProductByCatId);
//Post method category
categRouter.post('/', genericValidator(nameSchema, 'body'), categoriesController.addCategory)
//Post method for Update category
categRouter.put('/:id', genericValidator(schemaIdCheck, 'params'), genericValidator(nameSchema, 'body'), categoriesController.updateCategory);
//Delete category
categRouter.delete('/:id', genericValidator(schemaIdCheck, 'params'), categoriesController.deleteCategory);


export { productsRouter, categRouter };
