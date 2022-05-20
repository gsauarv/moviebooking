import express from "express";
import bookingModel from "../models/booking.js";

const app = express();
// 625ab7569f53f3af99966d3e
// 625abd55250cabdff439394f

// get bookings

app.get("/getBookings", async (req, res) => {
  const bookings = await bookingModel.find({});
  try {
    res.send(bookings);
  } catch (error) {
    res.status(500).send(error);
  }
  console.log(bookings);
});

// post booking
app.post("/createBooking", async (req, res) => {
  const booking = new bookingModel(req.body);
  try {
    await booking.save();
    res.send("Booking created Successfuly");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/getBooking/:userId", async (req, res) => {
  const id = req.params.userId;
  const booking = await bookingModel.find({}).populate("user");
  console.log(booking);
});

export default app;
