import orderSchema from "../models/Orders.js"
import { InternalServerError } from "../utils/error.js";


const GET = async (req, res, next) => {
    try {
        const orderData = await orderSchema.find()
        res.send(orderData)
    } catch (error) {
        console.log(error.message);
        return next(new InternalServerError(500, error.message))

    }
}

const POST = async (req, res, next) => {
    try{
        const {food_name, user_id, client_adress, adress_explanation, phone_number} = req.body
        let newOrder = await orderSchema.create({
            food_name,
            user_id,
            client_adress,
            adress_explanation,
            phone_number
        })

        console.log(newOrder);
        res.status(200).json({
            status: 200,
            message: "Order has been added!",
            data: newOrder
        })
    } catch(err) {
        console.log(err.message);
        return next(new InternalServerError(500, error.message))

    }
}


const PUT = async (req, res, next) => {
    try {
        const { _id, food_name, client_adress, adress_explanation } = req.body

        const updatedData = await orderSchema.updateOne({_id: _id}, {
            $set: {
                food_name: food_name,
                client_adress: client_adress,
                adress_explanation: adress_explanation
            }
        })
        const data = orderSchema.findOne({_id: _id})
    
        res.status(201).json({
            status: 201,
            message:"Informations has been successfully updated!",
            result: updatedData,
            data: data
        })
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}

const DELETE = async (req, res, next) => {
    try {
        const { _id } = req.body
        const result = orderSchema.deleteOne({
            _id: _id
        })

        res.status(201).json({
            status: 201,
            message: "The order has been successfully deleted!",
            result: result
        })
    } catch (error) {
        console.log(error.message);
        return next(new InternalServerError(500, error.message))
    }
}


export default {
    POST,
    GET,
    PUT,
    DELETE,
}