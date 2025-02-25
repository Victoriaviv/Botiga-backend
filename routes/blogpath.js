import { createBlog,getAllblog,getBlogById} from "../controllers/blogcontroller.js";
import configureMulter from "../utils/multer.js";
import express from 'express';

const blogRouter=express();

const upload = configureMulter();

blogRouter.post("/createBlog",upload,createBlog);
blogRouter.get("/getAllblog",getAllblog);
blogRouter.get("/getBlogById/:id",getBlogById)
export default blogRouter;