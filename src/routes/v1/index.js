const express = require ('express')
const router = express.Router()
const {infoController} = require('../../controller')
const airplaneRoutes =require("./airplane-router")
const cityRoutes = require("./city-router")
const airportRoutes = require("./airport-router")

router.use("/airplanes",airplaneRoutes)
router.use("/cities",cityRoutes)
router.use("/airports",airportRoutes)
router.get('/info',infoController.info);
module.exports=router
