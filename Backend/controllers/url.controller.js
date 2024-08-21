import { Url } from "../Models/url.model.js";

const createUrl = async(req,res) =>{
try {
        const {originalUrl ,customUrl} = req.body
    
        const customUrlExists = await Url.findOne({customUrl})
    
        if(customUrlExists){
            return res.status(400).send("Custom Url Already Exists!")
        }

        const createdUrl = await Url.create({
            originalUrl,
            customUrl,
        })

        return res.status(201).send(createdUrl)
} catch (error) {
    console.log(error.message)
}
}

const getUrl = async(req,res)=>{
    try {

        const originalUrl = await Url.find({
            customUrl:req.params.customUrl
        })

        if(originalUrl){
            return res.status(200).send(originalUrl)
        }

        return res.status(400).send("Cannot find the custom Url :", customUrl)

    } catch (error) {
        console.log(error.message)
    }
}

export {
    createUrl,
    getUrl,
}