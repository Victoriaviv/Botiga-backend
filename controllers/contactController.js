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
export const getAllcontact=async (req,res)=>{


    try{
const contacts= await contact.find();
res.status(200).json({success:true,contacts})
    }
    catch(error)
    {
  res.status(500).json({success:false,message:"server Error",error:error.message})
    }

}
export const getContactById=async(req,res)=>{
    try{

    
const {id}=req.params;
const contacts= await contact.findById(id);
    if(!contact)
    {return res.status(404).json({success:false,message:"contact not found"})}
    res.status(200).json({success:true,contact})
}
catch(error){
    res.status(500).json({success:false,message:"server Error",error:error.message})
}

}
export const deleteContactById=async(req,res)=>{
    try{
        const{id}=req.params;
        const contacts=contact.findByIdAndDelete(id);
        if(!contact)
            {return res.status(404).json({success:false,message:"contact not found"});
    }
        res.status(200).json({success:true,message:"contact deleted successfuly"});
    }
    catch(error){
        res.status(500).json({success:false,message:"server Error",error:error.message})
    }
        
    }
    export const updateContactById=async(req,res)=>{
        try{
     const {id}=req.params;
     const updatedData= await contact.findByIdAndUpdate(id,req.body);
     if(!updatedData) {
        res.status(404).json({success:false,message:"server error",error:error.message})
    }
        res.status(200).json({success:true,message:"contact updated successfully",})
    }
    
     catch(error){
        res.status(500).json({success:false,message:"server Error",error:error.message})
        }
    }

