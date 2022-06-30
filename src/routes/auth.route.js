import { Router } from "express";
import CT from '../controller/auth.controller.js'
import validator from '../middlewares/validator.middleware.js'
import checkAdmin from "../middlewares/checkAdmin.middleware.js";

const route = Router()

route.post("/client/login", validator, CT.LOGIN)
route.get('/api/users',checkAdmin, CT.GET)
route.delete('/api/users', checkAdmin, CT.DELETE)
route.put('/api/users', CT.PUT)


export default route