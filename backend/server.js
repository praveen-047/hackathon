import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from './routes/authRoutes.js'
// import homeRoutes from './routes/homeRoutes.js'


const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/auth',authRoutes)
// app.use("/home",homeRoutes)



app.listen(process.env.PORT,()=>{
    console.log("server running at port http://localhost:5000");  
})