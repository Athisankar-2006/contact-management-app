//@desc get all contact
//@route get /api/contacts
//@access public

const getContacts=(req,res)=>{
    res.status(200).send({message:"get all contacts"})
}



//@desc create new contact
//@route post /api/contacts/:id
//@access public

const createContact=(req,res)=>{
    console.log("the request body is :",req.body);
    res.status(201).send({message:"create new contacts"})
}


//@desc create new contact
//@route put /api/contacts/:id
//@access public

const getContact=(req,res)=>{
    res.status(201).send({message:"gat a specific contacts"})
}


//@desc update a contact
//@route put /api/contacts/:id
//@access public

const updateContact=(req,res)=>{
    res.status(201).send({message:"update a contacts"})
}


//@desc delete a contact
//@route delete /api/contacts
//@access public

const deleteContact=(req,res)=>{
    res.status(201).send({message:"delete a contacts"})
}


module.exports={getContacts, createContact,deleteContact,updateContact,getContact};