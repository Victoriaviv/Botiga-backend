import express from "express"
import contactRouter from "./contactpath.js";

const mainRouter=express.Router();
mainRouter.use("/contact",contactRouter)

export default mainRouter;