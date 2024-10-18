const mongoose =  require('mongoose');
const {RegisterAdmin} = require('../controller/admin-panel/admin/adminControler');
require('dotenv').config();

const url = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}-@${process.env.DB_APP_NAME}.d06y6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`;
// console.log(url)

mongoose.connect(url)
.then(() => {
    console.log('Connected to MongoDB');
    RegisterAdmin();
})
.catch((error) => console.log(error));



