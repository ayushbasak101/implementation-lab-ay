// todo: basic server setup
import express from "express";
import dotenv from "dotenv"

const app=express()
const PORT=process.env.PORT || 5000
dotenv.config()

app.get("/home",(req,res)=>{
   res.status(200).json({name:"Ayush"})
})

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})