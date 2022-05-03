import express from "express";
import userModel from "../models/user.js";

// init app

const app = express();

// get users;

app.get("/users", async (req, res) => {
  const users = await userModel.find({});
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// post user data into database

app.post("/addUser", async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete user details

app.delete("/deleteUser/:id", async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) res.status(404).send("no user found!!");
    res.status(200).send("User Deleted Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default app;
