import userSchema from '../models/User.js'

const ADMIN = async (req, res) => {
    const data = await userSchema.find()

    console.log(data);
    res.send(data)
}

export default {
    ADMIN
}