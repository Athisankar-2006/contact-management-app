const express=require("express");
const router=express.Router();


router.route("/").get((req,res)=>{
    res.status(200).send({message:"get all contacts"})
})


router.route("/").post((req,res)=>{
    res.status(200).send({message:"create contacts"})
})


router.route("/:id").get((req,res)=>{
    res.status(200).send({message:`get contact for ${req.params.id}`})
})


router.route("/:id").put((req,res)=>{
    res.status(200).send({message:`update contact for ${req.params.id}`})
})



router.route("/:id").delete((req,res)=>{
    res.status(200).send({message:`delete contact for ${req.params.id}`})
})





module.exports=router;