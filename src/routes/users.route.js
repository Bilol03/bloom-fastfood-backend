import { Router } from "express";
import CT from '../controller/users.controller.js'
import validator from '../middlewares/validator.middleware.js'

const route = Router()

route.post('/api/login', validator, CT.POST)

export default route