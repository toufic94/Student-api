import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import studentRoutes from './routes/studentRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

if(process.env.NODE_ENV==='Development'){
    app.use(morgan('dev'))
}

app.use("/api/students",studentRoutes)

app.get("/", (req,res) =>
    res.send("Api is running..."))

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port,console.log(`server started in ${process.env.NODE_ENV} module on port ${port} `))