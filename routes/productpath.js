import {createProduct,getAllproduct,getProductById,deleteProductById,updateProductById} from "../controllers/productcontroller.js";
import configureMulter from "../utils/multer.js";
import express from 'express'
import { admin } from "../middlewares/roleIdentification.js";
import { auth } from "../middlewares/tokenVerification.js";
const productRouter=express();

const upload = configureMulter();

productRouter.post("/createProduct",upload,auth,admin,createProduct);
productRouter.get("/getAllproduct",getAllproduct);
productRouter.get("/getProductById/:id",getProductById);
productRouter.delete("/deleteProductById/:id",deleteProductById);;
productRouter.put("/updateProductById/:id",updateProductById);
export default productRouter;