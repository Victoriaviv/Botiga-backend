import {createProduct,getAllproduct,getProductById,deleteProductById,updateProductById} from "../controllers/productcontroller.js";

import express from 'express'

const productRouter=express();

productRouter.post("/createProduct",createProduct);
productRouter.get("/getAllproduct",getAllproduct);
productRouter.get("/getProductById/:id",getProductById);
productRouter.delete("/deleteProductById/:id",deleteProductById);;
productRouter.put("/updateProductById/:id",updateProductById);
export default productRouter;