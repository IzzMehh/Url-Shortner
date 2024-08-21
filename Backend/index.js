import { configDotenv } from "dotenv";
import app from "./app.js";
import connectDB from "./db/connect.js";

configDotenv()

const PORT = process.env.PORT

connectDB()
    .then(() => {
        console.log("Connected MongoDB Successfully")
        app.listen(PORT, () => {
            console.log(`Connected with PORT : ${PORT}`)
        })
    })
    .catch((e)=>{
        console.log("Error while connecting MongoDB: ", e.message)
    })