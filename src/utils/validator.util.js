import Joi from 'joi'

const userScheme = Joi.object({
    username: Joi.string().min(4).max(30).required(),
    phone_number: Joi.string().pattern(new RegExp(/^(?:"[9]{2}[8][0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}")$/)).required()
})
    .with("username", "phone_number")


process.JOI = {
    userScheme
}