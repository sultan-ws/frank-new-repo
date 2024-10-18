const mongoose =  require('mongoose');

const colorSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    created_at:{
        type:Date
    },
    updated_at:{
        type:Date
    }
})

colorSchema.pre('save', (next)=>{
     const currentDate = new  Date();

     if(this.new){
        this.created_at = currentDate;
     }
     if(this.new){
        this.updated_at = currentDate;
     }
     next();
})

const Color = mongoose.model('colors',colorSchema);

module.exports = Color;