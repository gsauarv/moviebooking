import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  noOfSeats: {
    type: "Number",
    required: true,
  },
  bookedMovie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movie",
    required: true,
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
