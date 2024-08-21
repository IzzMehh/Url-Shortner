import express from "express";
import urlRouter from "./Routes/Url.routes.js";

const app = express()

// MiddleWares

app.use(express.urlencoded({extended:true}))



// Routes Imports

app.use("/",urlRouter)


// Routes



export default app