const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email:String,
    password:String,
    name:String,
    fb:String,
    instagram:String,
    youtube:String,
    twitter:String,
    logo:String,
    fav_icon:String,
    footer_icon:String

});

const Admin = mongoose.model('admins', adminSchema);

module.exports = Admin;