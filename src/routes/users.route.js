import { Router } from "express";
import CT from '../controller/users.controller.js'

const route = Router()

route.post('/api/user-order', CT.POST)

export default route