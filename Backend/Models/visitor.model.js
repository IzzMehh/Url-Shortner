import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
    totalVisitors:{
        type:Number,
        default:0,
    },
    newVisitors:{
        type:Number,
        default:0,
    },
    url:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Url",
    },
    ip:{
        type:String,
    }
},{
    timestamps:true
})

export const Visitor = mongoose.model("Visitor",visitorSchema)