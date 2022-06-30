import checkAdmin from "../middlewares/checkAdmin.middleware.js"
import { Router } from "express";
import CT from '../controller/orders.controller.js'

const router = Router()
router.get('/api/orders', checkAdmin, CT.GET)
router.delete('/api/orders', checkAdmin, CT.DELETE)
router.post('/api/user-order', CT.POST)

export default router