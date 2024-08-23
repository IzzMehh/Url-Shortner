import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
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