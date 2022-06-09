import mongoose from "mongoose";
const ticketSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 2,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },

    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", ticketSchema); //colle and schema
