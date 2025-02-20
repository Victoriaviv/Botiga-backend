import contact from "../models/contactModal.js";


export const createContact=async(req,res)=>{
    try{
const{names,email,subject,message,phone,status}=req.body;
const newContact=new contact({names,email,subject,message,phone,status});

await newContact.save();

res.status(201).json({success:true,message:"Contact created successfully",contact:newContact});
    }catch(error){
    res.status(500).json({success:false,message:"server Error",error:error.message});
    

    }
}