const mongoose =  require('mongoose');

const parentSchema =  new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String
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

parentSchema.pre('save', (next)=>{
    const currentDate = new Date();

    if(this.new){
        this.created_at = currentDate;
    }
    else{
        this.updated_at = currentDate;
    }
    next();
})

const  Parent = mongoose.model('Parent-cattegory', parentSchema);

module.exports = Parent;