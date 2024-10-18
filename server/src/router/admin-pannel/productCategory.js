const express =  require('express');
const { addProductcategory, readProductCategory, productCategoryByParentCategory } = require('../../controller/controller');
const filesUploads = require('../../middleware/multer/multer');

const productCategoryRouter =  express.Router();

productCategoryRouter.post('/addproduct-category', filesUploads('productCategory'), addProductcategory);
productCategoryRouter.get('/read-productCategory', readProductCategory)
productCategoryRouter.get('/get-product-by-parent-cat:/parent_category', productCategoryByParentCategory)

module.exports =  productCategoryRouter;