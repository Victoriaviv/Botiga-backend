import product from "../models/productModal.js";
import {cloudinary }from "../utils/cloudinaryconfig.js"

export const createProduct=async(req,res)=>{
    try{
        if(!req.files|| !req.files.images || req.files.images.length ===0){
            return res.status(400).json({success:false,message:"No image uploaded"});
        }
            const result = await cloudinary.uploader.upload(req.files.images[0].path);
        
const{productName,productPrice,productDiscount,productCategory}=req.body;

const images = result.secure_url;
const newProduct=new product({productName,productPrice,productDiscount,productCategory,images});

await newProduct.save();

res.status(201).json({success:true,message:"product created successfully",product:newProduct});
    }catch(error){
    res.status(500).json({success:false,message:"server Error",error:error.message});
    

    }
}
export const getAllproduct=async (req,res)=>{


    try{
const products= await product.find();
res.status(200).json({success:true,products})
    }
    catch(error)
    {
  res.status(500).json({success:false,message:"server Error",error:error.message})
    }

}
export const getProductById=async(req,res)=>{
    try{

    
const {id}=req.params;
const products= await product.findById(id);
    if(!product)
    {return res.status(404).json({success:false,message:"product not found"})}
    res.status(200).json({success:true,product})
}
catch(error){
    res.status(500).json({success:false,message:"server Error",error:error.message})
}

}
export const deleteProductById=async(req,res)=>{
    try{
        const{id}=req.params;
        const products=product.findByIdAndDelete(id);
        if(!product)
            {return res.status(404).json({success:false,message:"product not found"});
    }
        res.status(200).json({success:true,message:"product deleted successfuly"});
    }
    catch(error){
        res.status(500).json({success:false,message:"server Error",error:error.message})
    }
        
    }
     export const updateProductById=async(req,res)=>{
        try{
     const {id}=req.params;
     const updatedData= await product.findByIdAndUpdate(id,req.body);
     if(!updatedData) {
        res.status(404).json({success:false,message:"server error",error:error.message})
    }
        res.status(200).json({success:true,message:"product updated successfully",})
    }
    
     catch(error){
        res.status(500).json({success:false,message:"server Error",error:error.message})
        }
    }