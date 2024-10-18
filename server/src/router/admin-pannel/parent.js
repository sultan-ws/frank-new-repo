const express =  require('express');
const {
     addParent, 
     readParentCat,
      DeleteParentCat,
       updateStatus,
        multiDeleteParentCategories,
         readParentCatbyID,
          updateParentCategory,
           searchParentCat, 
           trueParentCat
         } = require('../../controller/controller');

const parentRouter =  express.Router();


parentRouter.post('/add-parent', addParent);
parentRouter.get('/read-parent', readParentCat);
parentRouter.delete('/delete-parent/:_id', DeleteParentCat);
parentRouter.put('/update-status/:_id', updateStatus);
parentRouter.put('/multi-delete', multiDeleteParentCategories);
parentRouter.get('/read-catrgory-byId/:_id', readParentCatbyID);
parentRouter.put('/update-category/:_id', updateParentCategory);
parentRouter.get('/search-category/:key', searchParentCat);
parentRouter.get('/get-parent-cat', trueParentCat)

module.exports =  parentRouter;
