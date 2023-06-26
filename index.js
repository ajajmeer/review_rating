require("dotenv").config();
require("./config/modelConfig")
const express=require("express");
const userRouter = require("./routes/userRouter");
const app=express();
// const PORT=9000;


app.use('/',userRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server runing on port no:${process.env.PORT}`)
})

