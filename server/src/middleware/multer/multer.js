const multer = require ('multer');
const path = require('path');

const multerStorage = (foldername)=> multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `src/uploads/${foldername}`)
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        cb(null, Date.now() * Math.floor(Math.random() * 100000)  + extname);


    }
})

const filesUploads = (foldername)=> multer({storage: multerStorage(foldername)}).fields([
    {
        name: 'thumbnail',
         maxCount: 1
    },
    {
        name: 'logo',
         maxCount: 1
    },
    {
        name: 'fav_icon',
         maxCount: 1
    },
    {
        name: 'footer_icon',
         maxCount: 1
    }
])

module.exports =  filesUploads;
