import { Router } from "express";
import CT from '../controller/food.controller.js'

const route = Router()

route.get('/api/bloom/admin', CT.ADMIN)

export default route