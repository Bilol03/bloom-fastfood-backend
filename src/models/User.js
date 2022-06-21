import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: Number,
        required: true,
        unique: true
    },
    _id: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("users", userSchema)