// admin controller
const { login, readAdmin, updateAdmin, generateOTPtoupdateemail, updateAdminEmail } = require("./admin-panel/admin/adminControler");

// color controller
const {addColor, readColor, deleteColor, multideleteColor, updatecolorStatus, readColorbyID, updatecolors} = require("./admin-panel/color/color");

// parent controller
const {addParent, readParentCat, DeleteParentCat, updateStatus, multiDeleteParentCategories, readParentCatbyID, updateParentCategory, searchParentCat, trueParentCat} = require("./admin-panel/parents/parentController");

// product controller
const { addProductcategory, readProductCategory, productCategoryByParentCategory } = require("./admin-panel/product-category/productcategoryController");

//size controller
const {addSize, readsize, deleteSize, multiDeletesizes, updatesizestatus, readSizetbyID, updatesize} = require("./admin-panel/size/sizeController");

//website user controller
const { generateOTP } = require("./website/user/userController");





module.exports = {
    login,
    addColor,
    addParent,
    addSize,
    readParentCat,
    readColor,
    readsize,
    DeleteParentCat,
    deleteSize,
    deleteColor,
    updateStatus,
    updatesizestatus,
    updatecolorStatus,
    multiDeletesizes,
    multiDeleteParentCategories,
    multideleteColor,
    readParentCatbyID,
    readColorbyID,
    readSizetbyID,
    updateParentCategory,
    updatesize,
    updatecolors,
    searchParentCat,
    trueParentCat,
    addProductcategory,
    readProductCategory,
    readAdmin,
    updateAdmin,
    generateOTPtoupdateemail,
    updateAdminEmail,
    productCategoryByParentCategory,
    generateOTP

}