import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import mainRouter from './routes/indexRouting.js';
import bodyParser from 'body-parser';
import Contact from './models/contactModal.js';
// import {User} from './User.modal.js'
dotenv.config();

// const uploadRoute = require("./controllers/routeUpload.js");  
const port=process.env.PORT||3000
const db_user=process.env.DB_USER;
const db_name=process.env.DB_NAME;
const db_pass=process.env.DB_PASS
const app = express();
// app.use("/api/users",uploadRoute);

app.use(express.json())
app.use("/", mainRouter)
app.use(bodyParser.json());



const dbUri =process.env.DB_URL;
console.log(dbUri)
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Node API is running on port http://localhost:${port}`);
     
    });
  })
  .catch((error) => {
    console.log(error);
  });
  // app.get("/", (req, res) => {
  //   res.send("Welcome to Nodejs Authentication Tutorial");
    
  // });
  
  app.post("/contact",(req,res)=>{
   const names=req.body.names
   const email=req.body.email
   const phone=req.body.phone
   const message=req.body.message
   const subject=req.body.subject
   const newContact=new Contact({
    names:names,
    email:email,
    phone:phone,
    message:message,
    subject:subject,
     })
     newContact.save()
     return res
      .status(201)
     .json({ message: "contact Created Successfully", newContact });
 })
// app.get("/", (req, res) => {
 
//   res.send("Welcome to Nodejs Authentication Tutorial");
  
// });
// app.post("/signup",(req,res)=>{
// const Username=req.body.Username
// const email=req.body.email
// const newuser=new User({
//   fullName:Username,
//   email:email,
// })
// newuser.save()
// return res
//       .status(201)
//       .json({ message: "User Created Successfully", newuser });
// })
