import mongoose from "mongoose";

// create a user schema

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    min: 3,
  },

  middleName: {
    type: String,
    required: false,
    trim: true,
    min: 3,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
    min: 3,
  },

  mobileNo: {
    type: Number,
    required: true,
    trim: true,
  },

  emailAddress: {
    type: String,
    required: true,
    trim: true,
  },
});

// create a mongoose model of the users

const Users = mongoose.model("Users", UserSchema);

export default Users;
