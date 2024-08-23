import { Url } from "../Models/url.model.js";
import { Visitor } from "../Models/visitor.model.js";

const createUrl = async (req, res) => {
    try {
        const { originalUrl, customUrl } = req.body

        const customUrlExists = await Url.findOne({ customUrl })

        if (customUrlExists) {
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

const getUrl = async (req, res) => {
    try {

        const originalUrl = await Url.find({
            customUrl: req.params.customUrl
        })

        if (!originalUrl) {
            return res.status(400).send("Cannot find the custom Url :", customUrl)
        }

        await Visitor.create({
            ip: req.ip,
            url: originalUrl[0]._id
        })


        const count = await Visitor.countDocuments({ url: originalUrl[0]._id });
        const visitors = await Visitor.find({ url: originalUrl[0]._id });

        const newVisitorArray = []

        visitors.map((documet)=>{
            if(!newVisitorArray.includes(documet.ip)){
                newVisitorArray.push(documet.ip)
            }
        })

        const updatedOriginalUrl = await Url.findOneAndUpdate({
            _id: originalUrl[0]._id,
        },{
            $set: {
                totalVisitors:count,
                newVisitors:newVisitorArray.length,
            }
        },{
            new:true,
        }
        )

        return res.status(201).send(updatedOriginalUrl)

    } catch (error) {
        console.log(error.message)
    }
}

export {
    createUrl,
    getUrl,
}