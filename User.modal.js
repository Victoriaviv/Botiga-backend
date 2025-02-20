import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
  userId:{
    type:String
  }, 
  fullName:{
    type:String 
  }, 
  email:{
    type:String
  }, 
  password: {
    type:String
  }, 
  phoneNumber:{
    type:String
  }
})

export const User = mongoose.model('User', userSchema);


