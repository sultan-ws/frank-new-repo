const express =  require('express');
const allRoutes = require('./src/app');
require('dotenv').config();
require('./src/db/config');
const cors = require('cors');

const app =  express();

app.use(cors());
app.use(express.json());
app.use('/frank-and-ocks-files/product-category', express.static('src/uploads/productCategory'))
app.use('/frank-and-ocks-files/admin', express.static('src/uploads/admin'))
app.use('/api', allRoutes);

app.listen(process.env.PORT,  () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
