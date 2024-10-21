const nodemailer = require('nodemailer')

 const otpObject = new Map();


const generateOTP = async(req,  res)=>{
    try{
      console.log(req.body)

      res.status(200).json({message:'success'})
    //   const generatedotp =  Math.floor( Math.random() * 900000);
  
    //   otpObject.set( req.body.email, generatedotp);
  
    //   console.log( req.body.email,otpObject)
  
    //   const transporter =  nodemailer.createTransport({
    //     service:  'Gmail',
    //     auth: {
    //       user: process.env.APP_EMAIL ,
    //       pass:  process.env.APP_PASS,
    //     }
    //   })
    //   const mailOptions = {
    //     from: 'noreply@mail.com' ,
    //     to: req.body.email,
    //     subject: 'OTP for update email',
    //     text: `Your OTP is ${generatedotp}`
    //   }
    //   transporter.sendMail(mailOptions, (error, info) => {
    //     if(error) return  res.status(500).json({message:'something went wrong'})
  
    //   res.status(200).json({message:'OTP has been send'})
       
    //   })
  
    //   // res.status(200).json({message:'success'})
  
    }
    catch(eeror){
      console.log(eeror)
      res.status(500).json({message:'internal server error'})
    }
}

module.exports = {
    generateOTP
};