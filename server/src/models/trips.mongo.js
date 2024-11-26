const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({  
    clientData:{
            name: {
                type: String,
                required: [true, "Please add reference for name"]
            },
            lastName: {
                type: String,
                required: [true, "Please add reference for last name"]
            },        
            country: {
                type: String,
                required: [true, "Please add reference for last country"]
            },
            email: {
                type: String,
                required: [true, "Please add reference for last country"]
            }
        },
    reservationId:{
        type: Number,
        required: [true, "Please add the reservation number"]
        },
    totalAmount:{
        type: Number,
        required: [true, "Please add total amount"]
        },
    tripDateStart:{
        type: String
        },
    tripDateEnd:{
        type: String
        },
    tripDays:{
        type: Number,
        },
    routes:{
        type: Array,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Trip", tripSchema);