const Admin = require("../../../model/admin/admin")
require('dotenv').config();
const nodemailer = require('nodemailer')

 const otpObject = new Map();

const RegisterAdmin = async()=>{
    const ifAdmin = await  Admin.find();

    // console.log(ifAdmin)
    if(ifAdmin.length != 0){return console.log(ifAdmin[0])};

    const data = new Admin({
        email:process.env.ADMIN_EMAIL,
        password:process.env.ADMIN_PASSWORD
    })

    const response = await data.save();

    console.log(response);
}

const login = async(req, res)=>{
      try{
          const { email , password } = req.body;

          const adminData = await Admin.findOne({email: email});

          if(!adminData){
            return res.status(400).json({message: 'please provide a valid email'})
            }
          if(adminData.password !== password){
            return res.status(400).json({message: 'please provide a valid password'})
          }  

          console.log(adminData)

          res.status(200).json({message:'succcess', data:adminData});
      }
      catch(error){
        console.log(error);
        res.status(500).json({message:'internet server error'});
      }
}

const readAdmin =  async(req, res)=>{
  try{
    const response = await Admin.find();

    
    const path =  `${req.protocol}://${req.get('host')}/frank-and-ocks-files/admin/` ;
    res.status(200).json({message:'succcess', data:response, path});
  }
  catch(error){
      console.log(error);
      res.status(500).json({message:'internet server error'});
  }
}

const updateAdmin =  async(req, res)=>{
  try{
    const data = req.body;

    // console.log(req.files)

    if(req.files){
      if(req.files.logo){
        data.logo =  req.files.logo[0].filename;

      };
      if(req.files.fav_icon){ 
        data.fav_icon =  req.files.fav_icon[0].filename;

      };
      if(req.files.footer_icon){
        data.footer_icon =  req.files.footer_icon[0].filename;

      }

    }
    const response = await Admin.updateOne(
      req.params,
      { $set: data }
    )

    console.log(data)
    res.status(200).json({message: 'success', data : response });


    
  }
  catch(error){
    console.log(error);
    res.status(500).json({message: 'internal server error'})
  }
}

const generateOTPtoupdateemail = async(req,  res)=>{
  try{
    console.log(req.body)
    const generatedotp =  Math.floor( Math.random() * 900000);

    otpObject.set( req.body.email, generatedotp);

    console.log( req.body.email,otpObject)

    const transporter =  nodemailer.createTransport({
      service:  'Gmail',
      auth: {
        user: process.env.APP_EMAIL ,
        pass:  process.env.APP_PASS,
      }
    })
    const mailOptions = {
      from: 'noreply@mail.com' ,
      to: req.body.email,
      subject: 'OTP for update email',
      text: `Your OTP is ${generatedotp}`
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if(error) return  res.status(500).json({message:'something went wrong'})

    res.status(200).json({message:'OTP has been send'})
     
    })

    // res.status(200).json({message:'success'})

  }
  catch(eeror){
    console.log(eeror)
    res.status(500).json({message:'internal server error'})
  }
}

const updateAdminEmail = async(req,  res)=>{
  try{
    const {currentemail} = req.body;
      if(!req.body.otp) return    res.status(400).json({message: 'otp is required'})
        console.log(Number(req.body.otp), otpObject.get(currentemail))
      
      if(Number(req.body.otp) !== otpObject.get(currentemail)) return  res.status(400).json({message: 'please provide a valid email'})

        const response =  await Admin.updateOne(
          {
            email: currentemail
          }, 
          {
            $set:{
              email: req.body.newemail
            }
          }
        )
        res.status(200).json({message :  'email has been updated', data :response})


  }
  catch(error){
    console.log(error)
    res.status(500).json({message:  'internal server error'})

  }
}

module.exports = {
    RegisterAdmin,
    login,
    readAdmin,
    updateAdmin,
    generateOTPtoupdateemail,
    updateAdminEmail
};