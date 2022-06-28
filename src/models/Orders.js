import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    food_name: {
        type: String,
        required: true
    },

    userId: {
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

export default mongoose.model("orders", orderSchema)
