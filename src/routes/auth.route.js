import { Router } from "express";
import CT from '../controller/auth.controller.js'

const route = Router()

route.post("/client/login", CT.LOGIN)

export default route