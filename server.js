
const express=require("express");
const app=express();

app.get("/api/",(req,res)=>{
    res.send("server is running now");
})

const PORT=4000;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});