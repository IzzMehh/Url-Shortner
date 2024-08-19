const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        lowercase: true,
    },
    customUrl: {
        type: String,
        required: true,
        lowercase: true,
        unique:true,
    },
    totalVisitor: {
        type: Number,
        default: 0, // Default value to avoid undefined
    },
    newVisitor: {
        type: Number,
        default: 0, // Default value to avoid undefined
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

module.exports = mongoose.model("Url", urlSchema);
