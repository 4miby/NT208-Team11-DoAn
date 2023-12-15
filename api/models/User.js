import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  username:{
    type:String,
    required: true,
    unique:true
  },
  email:{
    type:String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required: true
  },
  address:{
    type:String,
  },
  phoneNumber:{
    type:String,
  },
  GT:{
    type:String,
  },
  Birth:{
    type:String
  },
  img:{
    type:String
  },
  reservations:{
    type:[String]
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {timestamps:true});

export default mongoose.model("User", UserSchema);