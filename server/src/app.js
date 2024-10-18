const express = require('express');
const adminRoutes = require('./router/admin-pannel/admin');
const { login } = require('./controller/controller');
const colorRouter = require('./router/admin-pannel/color');
const sizeRouter = require('./router/admin-pannel/size');
const parentRouter = require('./router/admin-pannel/parent');
const productCategoryRouter = require('./router/admin-pannel/productCategory');

const adminRouter =  express.Router();
const webRouter =  express.Router();
const allRoutes  = express.Router();

adminRouter.use('/admin', adminRoutes);
adminRouter.use('/color', colorRouter);
adminRouter.use('/size',  sizeRouter);
adminRouter.use('/parent',  parentRouter);
adminRouter.use('/product-categoty', productCategoryRouter)



allRoutes.use('/frank-and-ock-services', webRouter);
allRoutes.use('/admin-panel', adminRouter);



module.exports = allRoutes;