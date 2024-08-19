const express = require("express")
const mongooes = require("mongoose");
const UrlModel = require("./Models/Url.model");

require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 4000


mongooes.connect(`${process.env.MONGODB_URI}`)
.then(()=>console.log("Connected MongoDB Successfully"))
.catch((e)=>console.log("Error while connecting DB:",e.message))


app.use(express.urlencoded({extended:false}))


app.get("/try",(req,res)=>{
    res.send(req.ip)
})

app.listen(PORT,()=>{
    console.log(`Connected to PORT ${PORT}`)
})

