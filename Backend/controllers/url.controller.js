import { Url } from "../Models/url.model.js";
import { Visitor } from "../Models/visitor.model.js";

const createUrl = async (req, res) => {
    try {
        const { originalUrl, customUrl } = req.body
        
        if(!originalUrl || !customUrl){
            return res.status(400).send("Original Url and Custom Url are required!")
        }

        const customUrlExists = await Url.findOne({ customUrl })

        if (customUrlExists) {
            return res.status(409).send("Custom Url Already Exists!")
        }

        const createdUrl = await Url.create({
            originalUrl,
            customUrl,
        })

        return res.status(201).send(createdUrl)
    } catch (error) {
        console.log(error.message)
        return res.status(500).send(error.message);
    }
}

const getUrl = async (req, res) => {
    try {

        const {customUrl} = req.params

        const originalUrl = await Url.findOne({ customUrl })

        if (!originalUrl) {
            return res.status(404).send(`Cannot find the custom url: ${customUrl}`);
        }

        await Visitor.create({
            ip: req.ip,
            url: originalUrl._id
        })

        const count = await Visitor.countDocuments({ url: originalUrl._id });
        const visitors = await Visitor.find({ url: originalUrl._id });

        const newVisitorArray = []

        visitors.map((documet)=>{
            if(!newVisitorArray.includes(documet.ip)){
                newVisitorArray.push(documet.ip)
            }
        })

        const updatedOriginalUrl = await Url.findOneAndUpdate({
            _id: originalUrl._id,
        },{
            $set: {
                totalVisitors:count,
                newVisitors:newVisitorArray.length,
            }
        },{
            new:true,
        }
        )

        return res.status(200).send(updatedOriginalUrl)

    } catch (error) {
        console.log(error.message)
        return res.status(500).send(error.message);
    }
}

export {
    createUrl,
    getUrl,
}