
const express = require('express')
const {serverConfig,Logger} =require('./config')
const app = express();
const apiRoutes = require('./routes')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',apiRoutes)
app.listen(serverConfig.PORT,async ()=>{
    console.log(`sucessfully started the server at port: ${serverConfig.PORT}`)
    Logger.info("successfully started the server",{})




    //garbage code

    
    // const {airport,city}=require("./models")
    // const City = await city.findByPk(3)
    // console.log(City);
    // const Airport = await airport.create({
    //     name:"Chakeri Airport",
    //     code:"KNU"
    // })

    // const Airport=await City.createAirport({
    //     name:"Chakeri Airport",
    //     code:"KNU"
    // })
    // console.log(Airport);

    // const hAirport=await City.createAirport({
    //     name:"HAL Kanpur Airport ",
    //     code:"HAL"
    // })
    // console.log(hAirport);
    // const knpairports = await City.getAirports();
    // console.log(knpairports);

    // const kAirport = await airport.findByPk(12)
    // console.log(kAirport);
    // await city.destroy({
    //     where:{
    //         id:3
    //     }
    // })
})