const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    thumbnail:String,
    parent_category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Parent-cattegory'
    },
    description:{
        type:String,
        required:true
    },
    created_at: Date,
    updated_at: Date
});

productSchema.pre('save', (next)=>{
    const currentDate = new Date();
    this.created_at = currentDate;

    next();
});

productSchema.pre('updateOne', (next)=>{
    const currentDate = new Date();
    this.updated_at = currentDate;

    next();
});

productSchema.pre('findByIDandUpdate', (next)=>{
    const currentDate = new Date();
    this.updated_at = currentDate;

    next();
});

const  ProductCategory = mongoose.model('Product', productSchema);

module.exports  = ProductCategory;
