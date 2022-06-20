import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    username: {
        type: String,
        default: "Client"
    },
    phone_number: {
        type: Number,
        required: true,
        uniquie: true
    }
}, {
    timestamps: true
})