const express =  require('express');
const { generateOTP } = require('../../controller/controller');

const userRouter =  express.Router();

    
 userRouter.post('/generate-otp', generateOTP)

module.exports =  userRouter;
