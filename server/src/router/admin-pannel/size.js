const express =  require('express');
const { addSize, readsize, deleteSize, multiDeletesizes, updatesizestatus, readSizetbyID, updatesize } = require('../../controller/controller');

const sizeRouter =  express.Router();

sizeRouter.post ('/add-size', addSize);
sizeRouter.get ('/read-sizes', readsize);
sizeRouter.delete('/delete-size/:_id', deleteSize);
sizeRouter.put('/delete-sizes', multiDeletesizes);
sizeRouter.put('/update-size-status/:_id', updatesizestatus);
sizeRouter.get('/read-size-byID/:_id', readSizetbyID);
sizeRouter.put('/update-size/:_id', updatesize)

module.exports = sizeRouter;