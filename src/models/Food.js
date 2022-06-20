import mongoose from "mongoose";

export const foodSchema = new mongoose.Schema({
    food_name: {
        type: String,
    },
    category_name: {
        type: String
    },
    food_img: {
        type: String
    }
})