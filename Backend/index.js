import { configDotenv } from "dotenv";
import app from "./app.js";
import connectDB from "./db/connect.js";

configDotenv()

const PORT = process.env.PORT || 4000

connectDB()
    .then(() => {
        console.log("Connected MongoDB Successfully")
        app.listen(PORT, () => {
            console.log(`Connected with PORT : ${PORT}`)
            console.log('u')
        })
    })
    .catch((e)=>{
        console.log("Error while connecting MongoDB: ", e.message)
    })