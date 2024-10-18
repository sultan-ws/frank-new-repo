const mongoose =  require('mongoose');


const sizeSchema =  new  mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    order:{
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

});
sizeSchema.pre('save', (next)=>{
   
    const currentDate = new Date();

    if(this.new){
        this.created_at = currentDate;
    }
    if(this.new){
        this.updated_at = currentDate;
    }
    next();
})

const  Size = mongoose.model('Size', sizeSchema);

module.exports = Size;