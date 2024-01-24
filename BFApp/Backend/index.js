const express= require("express")
const app= express()
const db = require("./config/mongoose")
const path = require("path")
const User = require("./Model/User")
const { default: mongoose } = require("mongoose")
const FoodItems=require("./Model/FoodItems")


// for parsing body data 
app.use(express.json())

// for parsing url 
app.use(express.urlencoded({ extended : true }))
// -------------------------------------------------------------------

app.get('/',async(req,res)=>{
    const Food_Items= await FoodItems.find()
    console.log(Food_Items)    
    res.send(Food_Items)
})
app.use("/login",require("./Routes/User"))
app.listen(1020,()=>{
    console.log( "----Server-Start----")
})