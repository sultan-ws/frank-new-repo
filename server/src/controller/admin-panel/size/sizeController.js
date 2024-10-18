const Size = require('./../../../model/size/size');
const addSize = async(req, res)=>{
    try{
        console.log(req.body)
        const datatosave =  new Size(req.body);
        const savedSizedata =  await datatosave.save();


        res.status(200).json({message:'successfully', data: savedSizedata});
    }
    catch(error){
        console.log(error);

        if(error.code === 11000 && error.keyPattern.name === 1) {
            res.status(401).json({message:'please provide a unique name'})
        }

        res.status(500).json({message:'internet server error'});
        
       
    }
};

const readsize =  async(req, res)=>{
    try{
        const size =  await Size.find();
        res.status(200).json({message:'successfully', data:size});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internet server error'});

    }
    
};

const deleteSize = async(req, res)=>{
    try{
         const size =  await Size.deleteOne(req.params);

        // console.log(req.params);
        res.status(200).json({message:'successfully', data : size});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internet server error'});

    }
}

const multiDeletesizes =  async(req, res)=>{
    try{
        const size =  await Size.deleteMany({_id: {$in: req.body.ids}});

       // console.log(req.params);
       res.status(200).json({message:'successfully', data : 'size'});
   }
   catch(error){
       console.log(error);
       res.status(500).json({message:'internet server error'});

   }
}

const updatesizestatus  =  async(req, res)=>{
    try{
        const size =  await Size.updateOne(
            req.params,
           {
             $set :{ status:req.body.status}
            }

        );
        res.status(200).json({message:'successfully', data:size});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internet server error'});

    }
}

const readSizetbyID  = async(req , res)=>{
    try{
        const data = await Size.find(req.params);

        res.status(200).json({message:'successfull', data:data});
}
catch(error){
    console.log(error);
    res.status(500).json({message: 'internal server error'});
}
};

const updatesize  = async(req , res)=>{
   
    try{
        console.log(req.body, req.params)
        const response = await Size.findByIdAndUpdate(
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
    addSize,
    readsize,
    deleteSize,
    multiDeletesizes,
    updatesizestatus,
    readSizetbyID,
    updatesize
};