import { Router } from "express";
import CT from '../controller/auth.controller.js'
import validator from '../middlewares/validator.middleware.js'

const route = Router()

route.post("/client/login", validator, CT.LOGIN)


export default route