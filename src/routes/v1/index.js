const express = require ('express')
const router = express.Router()
const {infoController} = require('../../controller')
const airplaneRoutes =require("./airplane-router")

router.use("/airplanes",airplaneRoutes)
router.get('/info',infoController.info);
module.exports=router
