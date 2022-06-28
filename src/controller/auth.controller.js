import userSchema from '../models/User.js'
import JWT from "../utils/jwt.js"
import { InternalServerError } from "../utils/error.js"

const LOGIN = async (req, res, next) => {
    try{
        const { username, phone_number, isAdmin, isManager } = req.body
        const newData = await userSchema.create({
            username,
            phone_number,
            _id: Date.now().toString().slice(-9),
            isAdmin: isAdmin ? isAdmin : false, 
            isManager: isManager ? isManager : false, 
        })
        
        res.status(200).json({
            status: 200,
            token: JWT.sign(newData._id),
            data: newData
        })
    } catch(err) {
        console.log(err.message);
        next(InternalServerError(500, err.message))
    }
}

export default {
    LOGIN
}