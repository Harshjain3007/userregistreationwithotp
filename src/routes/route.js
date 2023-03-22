const express = require('express')
const router = express.Router()
 

const imagecontroller=require('../controller/imageController')


//router.post('/createImage',imagecontroller.createImage)

router.post('/createImage',imagecontroller.createImage)
module.exports=router