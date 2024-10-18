const Color = require ('./../../../model/color/color');
const addColor = async (req, res)=>{
    try{

        const datatoSave = new  Color(req.body);
        const savedColor = await datatoSave.save();
         res.status(200).json({message:'success', data :savedColor});



    //   console.log(req.body);



    }
    catch(error){
        console.log(error);

        if(error.code === 11000 && error.keyPattern.name === 1) {
            res.status(401).json({message:'please provide a unique name'})
        }

        res.status(500).json({messsage:'interner server error'})

        
    }
};

const readColor =  async (req, res)=>{
    try{
        const color = await Color.find();
        res.status(200).json({message:'success', data :color});
    }
    catch(error){
        console.log(error);
        res.status(500).json({messsage:'interner server error'});
    }
};
const deleteColor =  async (req, res)=>{
    try{
        const color = await Color.deleteOne(req.params)
        // console.log(req.params)
        res.status(200).json({message:'success', data :color});
    }
    catch(error){
        console.log(error);
        res.status(500).json({messsage:'interner server error'});
    }
};

const updatecolorStatus =   async (req, res)=>{
    try{
        const color = await Color.updateOne(
            req.params,
             {
                $set: {status:  req.body.status}

             }
            )
        res.status(200).json({message:'success', data :color});
    
    }
    catch(error){
        console.log(error);
        res.status(500).json({messsage:'interner server error'});
    }
    
}


const multideleteColor =  async (req, res)=>{
    try{
        const response = await Color.deleteMany({_id: {$in:req.body.ids}})

        // console.log(req.params)
        res.status(200).json({message:'success', data :response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({messsage:'interner server error'});
    }
};

const readColorbyID  = async(req , res)=>{
    try{
        const data = await Color.find(req.params);

        res.status(200).json({message:'successfull', data:data});
}
catch(error){
    console.log(error);
    res.status(500).json({message: 'internal server error'});
}
};

const updatecolors  = async(req , res)=>{
   
    try{
        // console.log(req.body, req.params)
        const response = await Color.findByIdAndUpdate(
            req.params,
            {
                $set:req.body
            }
        )
        if(!response)  res.status(404).json({message:'please provide a valid id'});
       
       res.status(200).json({message:'successfull', data: response});
}

catch(error){
   console.log(error);
   res.status(500).json({message: 'internal server error'});
}
};

module.exports = {
    addColor,
    readColor,
    deleteColor,
    multideleteColor,
    updatecolorStatus,
    readColorbyID,
    updatecolors
};