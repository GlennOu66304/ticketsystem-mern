import mongoose from "mongoose";
const ticketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
 
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", ticketSchema); //colle and schema
