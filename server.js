
const express=require("express");
const app=express();
const dotenv=require("dotenv").config();

const port= process.env.PORT ||4000;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"))

app.get("/haii",(req,res)=>{
    res.status(200).send({message:"haii"})
});


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
});