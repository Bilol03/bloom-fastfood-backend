import mongoose from "mongoose";

export const orderSchema = new mongoose.Schema({
    food_name: {
        type: String,
        required: true
    },
    client_adress: {
        type: String,
        required: true
    },
    adress_explanation: {
        type: String
    },
    phone_number: {
        type: String
    }
}, {
    timestamps: true
})

