import express from "express";
import urlRouter from "./Routes/Url.routes.js";
import cors from "cors"

const app = express()

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// MiddleWares
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended:true}))



// Routes Imports

app.use("/api/url/",urlRouter)


// Routes



export default app