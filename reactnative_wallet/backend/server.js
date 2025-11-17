// const express = require{"express"}
import express from "express"
import dotenv from "dotenv"

const app = express()
const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.send("It's working")
})

console.log("my port:",process.env.PORT)

app.listen(5001, ()=>{
    console.log("Server is up and running on PORT:5001")
})