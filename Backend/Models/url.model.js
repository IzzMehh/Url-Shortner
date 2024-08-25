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
    totalVisitors:{
        type:Number,
        default:0,
    },
    newVisitors:{
        type:Number,
        default:0,
    },
},{
    timestamps:true
})

export const Url = mongoose.model("Url",urlSchema)
