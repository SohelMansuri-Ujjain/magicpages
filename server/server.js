import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from "./config/dbConfig.js"


dotenv.config()       //ye dotenv .env file ki process.env me daal raha h

//Local Imports
import authRoutes from "./routes/authRoutes.js"

const PORT = process.env.PORT || 5000
const app = express()

//DB Connection
connectDB()

app.get("/",(req,res)=>{
    res.json({
        message: "MAGIC PAGES API 1.0 "
    })
})

//Auth routes
app.use("/api/auth", authRoutes) // agar koi /api/auth pr request kre to jimmedari hogi authRoutes ki

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue)
})