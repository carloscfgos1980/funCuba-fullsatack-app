const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({  
    name:{
        type: String,
        required: [true, "Please add the contact name"]
        },
    country:{
        type: String,
        required: [true, "Please add the country"]
        },
    feedId:{
        type: String,
        required: [true, "Please add reference for feedback"]
        },
    type:{
        type: String,
        required: [true, "Please define the type of review"]
        },
    comment:{
        type: String,
        required: [true, "Please add a comment"]
        },
    rate:{
        type: Number,
        required: [true, "Please add rate"]
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Review", reviewSchema);