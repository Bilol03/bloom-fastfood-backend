import mongoose from "mongoose";

export async function connection () {
    await mongoose.connect("mongodb://0.0.0.0:27017/bloomDatas")
    console.log("*successfully connected to the database...")
}