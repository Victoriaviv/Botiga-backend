import {createContact, getAllcontact,getContactById,deleteContactById,updateContactById} from "../controllers/contactController.js";
import express from "express";


const contactRouter=express();

contactRouter.post("/createContact",createContact);
contactRouter.get("/getAllcontact",getAllcontact);
contactRouter.get("/getContactById/:id",getContactById);
contactRouter.delete("/deleteContactById/:id",deleteContactById);
contactRouter.put("/updateContactById/:id",updateContactById);
export default contactRouter;