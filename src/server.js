import { connection } from "./db.js";
import express from "express"
import path from "path"
import fileUpload from "express-fileupload"


const app = express()

app.use( express.json() )
app.use('/img', express.static(path.join(process.cwd(), "img")))
app.use(fileUpload())

import "../config.js"
import "./utils/validator.util.js"


import loginRoute from './routes/auth.route.js'
import ordersRoute from './routes/orders.route.js'
import foodRoute from './routes/food.route.js'

async function main() {
    await connection()

    app.use(loginRoute)
    app.use(ordersRoute)
    app.use(foodRoute)
}
main()

app.use((error, req, res, next) => {
    if (error.status !== 500) {
        return res.status(error.status).json({
            status: error.status,
            message: error.message,
            data: null,
            token: null
        })
    }

    fs.appendFileSync(
        path.join(process.cwd(), 'log.txt'),
        `${req.method}___${req.url}___${Date.now()}___${error.name}___${error.message}\n`
    )

    res.status(error.status).json({
        status: error.status,
        message: 'Internal Server Error',
        data: null,
        token: null
    })

    process.exit()
    next()
})

app.listen(3000, () => console.log("server is running on http://localhost:3000"))