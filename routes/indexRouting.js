import express from "express"
import contactRouter from "./contactpath.js";
import productRouter from "./productpath.js";


const mainRouter=express.Router();
mainRouter.use("/contact",contactRouter);
mainRouter.use("/product",productRouter)

export default mainRouter;