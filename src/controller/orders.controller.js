import orderSchema from "../models/Orders.js"


const POST = async (req, res, next) => {
    try{
        const {food_name, user_id, client_adress, adress_explanation, phone_number} = req.body
        let newData = await orderSchema.create({
            food_name,
            user_id,
            client_adress,
            adress_explanation,
            phone_number
        })

        console.log(newData);
        res.send(newData)
    } catch(err) {
        console.log(err.message);
    }
}

const GET = async (req, res, next) => {
    try {
        const orderData = await orderSchema.find()
        res.send(orderData)
    } catch (error) {
        console.log(error.message);
        
    }
} 

const DELETE = async (req, res, next) => {
    const { _id } = req.body
    const data = orderSchema.deleteOne({
        _id: _id
    })
}


export default {
    POST,
    GET,
    DELETE
}