import { ForbiddenError, AuthorizationError } from '../utils/error.js'
import JWT from '../utils/jwt.js'
import userSchema from '../models/User.js'

export default async (req, res, next) => {
    try {
        let { token } = req.headers

        if (!token) {
            return next(new ForbiddenError(403, "You are not allowed!"))
        }
        
        const _id  = JWT.verify(token)
        const data = await userSchema.findOne({
            _id: _id
        })
        
        if(data == null) {
            return next(new AuthorizationError(500, "Invalid Token"))
        }

        if(data.isAdmin == true) {
            return next()
        }else{
            return next(new ForbiddenError(403, "You are not allowed"))
        }

    } catch (error) {
        console.log(error);
        return next(new ForbiddenError(403, error.message))
    }
}