import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from './src/routes/user.routes.js';
import router from './src/routes/user.routes.js'

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

//routes

//routes declaration
app.use("/api/v1/users",userRouter)

// http://localhost:8000/api/v1/users/register
export {app}