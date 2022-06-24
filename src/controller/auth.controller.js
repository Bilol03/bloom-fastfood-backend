import userSchema from '../models/User.js'
import JWT from "../utils/jwt.js"

const LOGIN = async (req, res, next) => {
    try{
        const { username, phone_number } = req.body
        const newData = await userSchema.create({
            username,
            phone_number,
            _id: Date.now().toString().slice(-9)
        })
        
        res.status(200).json({
            status: 200,
            token: JWT.sign(newData._id),
            data: newData
        })
    } catch(err) {
        res.send(err.message)
        next(err)
    }
}

export default {
    LOGIN
}