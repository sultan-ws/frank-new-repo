const Parent = require("../../../model/parent-category/parents");

const addParent = async(req , res)=>{
    try{

        const dataToSave = await Parent(req.body);
        const savedData = await dataToSave.save();
        res.status(200).json({message:'successfull', data: savedData});

    }
    catch(error){
        console.log(error);
       
        res.status(500).json({message:'internel server error'})

        if(error.code === 11000 && error.keyPattern.name === 1) {
            res.status(401).json({message:'please provide a unique name'})
        }
    }
};

const readParentCat  = async(req , res)=>{
    try{
        const data = await Parent.find();
        res.status(200).json({message:'successfull', data:data});
}
catch(error){
    console.log(error);
    res.status(500).json({message: 'internal server error'});
}
};

const DeleteParentCat =  async(req , res)=>{
    try{
         const data = await Parent.deleteOne(req.params);
           
        res.status(200).json({message:'successfull', data: data});
}
catch(error){
    console.log(error);
    res.status(500).json({message: 'internal server error'});
}
};

const updateStatus  = async(req , res)=>{
    try{

        console.log(req.params, req.body);
        const data = await Parent.updateOne(
            req.params,
            {
                $set:{ status:req.body.status}
            }
        );
          
       res.status(200).json({message:'successfull', data: data});
}

catch(error){
   console.log(error);
   res.status(500).json({message: 'internal server error'});
}
};

const multiDeleteParentCategories =  async(req, res)=>{
    try{
      const response =  await Parent.deleteMany({ _id : {$in : req.body.ids}});

        console.log(req.body);
       res.status(200).json({message:'successfully', data : response});
   }
   catch(error){
       console.log(error);
       res.status(500).json({message:'internet server error'});

   }
};

const readParentCatbyID  = async(req , res)=>{
    try{
        const data = await Parent.find(req.params);

        res.status(200).json({message:'successfull', data:data});
}
catch(error){
    console.log(error);
    res.status(500).json({message: 'internal server error'});
}
};

const updateParentCategory  = async(req , res)=>{
   
    try{
        // console.log(req.body, req.params)
        const response = await Parent.findByIdAndUpdate(
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

const searchParentCat  = async(req , res)=>{
    try{
        // const data = await Parent.find({name: {$regex: new  RegExp(req.params.key)}});
        const data = await Parent.find({$or:[
            {name: {$regex: new  RegExp(req.params.key)}} ,
            {description: {$regex: new  RegExp(req.params.key)}}
        ]
        });


        if(data.length === 0) return  res.status(404).json({message:'no data found'});


        res.status(200).json({message:'successfull', data:data});
}
catch(error){
    console.log(error);
    res.status(500).json({message: 'internal server error'});
}
};

const trueParentCat  = async(req , res)=>{
    try{
        const data = await Parent.find({status: true});
        res.status(200).json({message:'successfull', data:data});
   }
    catch(error){
    console.log(error);
    res.status(500).json({message: 'internal server error'});
  }
};

module.exports = {
    addParent,
    readParentCat,
    DeleteParentCat,
    updateStatus,
    multiDeleteParentCategories,
    readParentCatbyID,
    updateParentCategory,
    searchParentCat,
    trueParentCat
};