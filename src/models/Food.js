import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    food_name: {
        type: String,
    },
    category_name: {
        type: String
    },
    food_img: {
        type: String
    },
    food_price: {
        type: String
    },
    food_info: {
        type: String
    }
})

export default mongoose.model("foods", foodSchema)
