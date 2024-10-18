const express  = require('express');
const { login, readAdmin, updateAdmin, generateOTPtoupdateemail, updateAdminEmail } = require('../../controller/controller');
const filesUploads = require('../../middleware/multer/multer');


const adminRoutes =  express.Router();
adminRoutes.post('/log-in', login);
adminRoutes.get('/read-admin', readAdmin);
adminRoutes.put('/update-admin/:_id', filesUploads('admin') , updateAdmin);
adminRoutes.post('/genertae-otp',generateOTPtoupdateemail);
adminRoutes.put('/update-email', updateAdminEmail)

module.exports =  adminRoutes;
