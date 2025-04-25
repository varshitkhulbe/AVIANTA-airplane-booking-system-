const express = require ('express')
const router = express.Router()
const {infoController} = require('../../controller')
const airplaneRoutes =require("./airplane-router")
const cityRoutes = require("./city-router")

router.use("/airplanes",airplaneRoutes)
router.use("/cities",cityRoutes)
router.get('/info',infoController.info);
module.exports=router
