import mongoose from 'mongoose';
const ReservationSchema = new mongoose.Schema({
  hotelName:{
    type:String, 
    require:true
  },
  address:{
    type:String,
    require:true
  },
  city:{
    type:String,
    require:true
  },
  roomNumbers:{
    type:[Number]
  },
  price:{
    type:Number,
    require:true
  },
  img:{
    type:String,
    require: true
  },
  people:{
    type:Number,
    require:true
  },
  rating:{
    type:Number,
    min:0,
    max:5
  },
  startDate:{
    type:Date,
  },
  endDate:{
    type:Date
  },
});

export default mongoose.model("Reservation", ReservationSchema);