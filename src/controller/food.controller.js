import foodSchema from "../models/Food.js"
import { InternalServerError, ValidationError } from "../utils/error.js"
import path from "path"


const GET = async (req,  res, next) => {
    try {
        const foodData = await foodSchema.find()
        if (foodData) {
            res.status(200,).json({
                status: 200,
                message: "Foods has been succesfully found",
                data: foodData
            })
        } else {
            res.status(404,).json({
                status: 404,
                message: "There is no food data",
                data: null
            })
        }
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}


const POST = async (req, res, next) => {
    try {
        const { food_name, category_name, food_price, food_info } = req.body
        const { food_img } = req.files
    
        if (food_img.size > 1024 * 1024 * 10) {
            return next(new ValidationError(400, "The file size is too large!"))
        }
    
        if (!['image/jpg', 'image/jpeg', 'image/png', "image/svg"].includes(food_img.mimetype)) {
            return next(new ValidationError(400, "Invalid video format!"))
        }
    
        const fileName = Date.now() + food_img.name.replace(/\s/g, '')
        food_img.mv(path.join(process.cwd(), "img", category_name, fileName))
        const newFood = await foodSchema.create({
            _id: Date.now().toString().slice(-9),
            food_name,
            category_name,
            food_img: "/img" + "/" + category_name.toString() + "/" + fileName,
            food_price,
            food_info
    
        })
    
        res.status(200).json({
            status: 200,
            message: "New food has been successfully added",
            data: newFood
        })
    } catch (error) {
        console.log(error.message);
        return next(new InternalServerError(500, error.message))
    }
}

const PUT = async (req, res, next) => {
    try {
        const { _id, food_name, category_name, food_price, food_info } = req.body
        const { food_img } = req.files
    
        if (food_img.size > 1024 * 1024 * 10) {
            return next(new ValidationError(400, "The file size is too large!"))
        }
    
        if (!['image/jpg', 'image/jpeg', 'image/png', "image/svg"].includes(food_img.mimetype)) {
            return next(new ValidationError(400, "Invalid video format!"))
        }
    
        const fileName = Date.now() + food_img.name.replace(/\s/g, '')
        food_img.mv(path.join(process.cwd(), "img", category_name, fileName))

        const result = await foodSchema.updateOne({_id: _id},{
            $set: {
            food_name,
            category_name,
            food_img: "/img" + "/" + category_name.toString() + "/" + fileName,
            food_price,
            food_info
    
        }
    })
    
        res.status(200).json({
            status: 200,
            message: "Food has been successfully updated",
            result: result 
        })
    } catch (error) {
        console.log(error.name);
        return next(new InternalServerError(500, error.message))
    }  
}

const DELETE = async (req, res, next) => {
    try {
        const id = req.body._id
        const result = await foodSchema.deleteOne({_id: id})
    
        res.status(201).json({
            status: 201,
            message: "Food has been succesfully deleted",
            result: result
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default {
    GET,
    POST,
    PUT,
    DELETE
}