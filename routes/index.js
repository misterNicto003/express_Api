const express = require("express");
const router = express.Router();
const multer = require("multer")


const uploadВestination = 'uploads'

//Показываем где хрантить файлы

const storage = multer.diskStorage({
    destination:uploadВestination,
    filename:function(req, res, cb) {
        cb(null, file.originalname)
    }
}) 

const upload = multer({ storage: storage })

router.get('/register', (req, res)=> {
    res.send('register');
})


module.exports = router;