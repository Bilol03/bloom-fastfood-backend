import { connection } from "./db.js";
import express from "express"



const app = express()

app.use( express.json() )

import "../config.js"
import "./utils/validator.util.js"


import adminRoute from './routes/admin.route.js'
import usersRoute from './routes/users.route.js'

async function main() {
    await connection()

    app.use(adminRoute)
    app.use(usersRoute)
}


main()
app.listen(3000, () => console.log("server is running on http://localhost:3000"))