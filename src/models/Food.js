import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    food_name: {
        type: String,
        required: true
    },
    category_name: {
        type: String,
        required: true
    },
    food_img: {
        type: String,
        required: true
    },
    food_price: {
        type: Number,
        required: true
    },
    food_info: {
        type: String
    }
})

export default mongoose.model("foods", foodSchema)
