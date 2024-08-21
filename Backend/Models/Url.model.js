import mongoose from "mongoose"

const urlSchema = new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true,
        lowercase:true,
    },
    customUrl:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
},{
    timestamps:true
})

export const Url = mongoose.model("Url",urlSchema)