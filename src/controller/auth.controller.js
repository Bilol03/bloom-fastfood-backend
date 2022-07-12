import userSchema from '../models/User.js'
import JWT from "../utils/jwt.js"
import { InternalServerError } from "../utils/error.js"

const LOGIN = async (req, res, next) => {
    try{
        const { username, phone_number } = req.body
        const newData = await userSchema.create({
            username,
            phone_number,
            _id: Date.now().toString().slice(-9),
            isAdmin: false, 
            isManager: false, 
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

const GET = async (req, res, next) => {
    try {
      const userList = await userSchema.find()
      userList ? res.send(userList): null  
      return next()
    } catch (error) {
        console.log(error.message);
        return next(new InternalServerError(500, error.message))
    }
}
const DELETE = async (req, res, next) => {
    try {
        const id = req.body._id

        const result = await userSchema.deleteOne({ _id: id })
        console.log(result);
    
        res.status(201).json({
            status: 201,
            message: "User successfully deleted!", 
            data: result
        })
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}

const PUT = async(req, res, next) => {
    try {
        const{ _id, username, phone_number } = req.body
        const updatedData = await userSchema.updateOne({ _id: _id },
            {
                $set: {
                    username: username,
                    phone_number: phone_number
                }
            })
        console.log(updatedData);
        res.status(201).json({
            status: 201,
            message: "The user successfully updated!",
            result: updatedData
        })
    } catch (error) {
        console.log(error.message);
        return next(new InternalServerError(501, error.message))
    }
}

export default {
    LOGIN,
    GET,
    DELETE,
    PUT
}