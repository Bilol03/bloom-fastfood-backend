import { Router } from "express";
import CT from '../controller/food.controller.js'
import checkAdmin from "../middlewares/checkAdmin.middleware.js";

const route = Router()

route.get('/api/food', CT.GET)
route.post('/api/food', checkAdmin, CT.POST)
route.put('/api/food', checkAdmin, CT.PUT)
route.delete('/api/food', checkAdmin, CT.DELETE)

export default route