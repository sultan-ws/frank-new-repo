const express =  require('express');
const { addColor, readColor, deleteColor, multideleteColor, updatecolorStatus, readColorbyID, updatecolors } = require('../../controller/controller');

const colorRouter = express.Router();

colorRouter.post('/add-color', addColor);
colorRouter.get('/read-color', readColor);
colorRouter.delete('/delete-color/:_id', deleteColor );
colorRouter.put('/multidelete-color', multideleteColor);
colorRouter.put('/update-color-status/:_id', updatecolorStatus);
colorRouter.get('/read-color-byID/:_id', readColorbyID);
colorRouter.put('/update-color/:_id', updatecolors)

module.exports = colorRouter;