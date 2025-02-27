import express from "express"
import contactRouter from "./contactpath.js";
import productRouter from "./productpath.js";
import blogRouter from "./blogpath.js";
import userRouter from "./userPath.js";


const mainRouter=express.Router();
mainRouter.use("/contact",contactRouter);
mainRouter.use("/product",productRouter);
mainRouter.use("/blog",blogRouter);
mainRouter.use("/user",userRouter);
export default mainRouter;