import express from "express";
import { authJwt } from "../middleware/passport.js";
import TicketController from "./controller.js";
const router = express.Router();

// test route
router.get("/", (req, res) => {
  res.send("this is the ticket route");
});

//Create a Ticket
router.post("/", TicketController.createTicket);

// //Update  user
// router.put("/:id", TicketController.updateUser);

// //delete user
// router.delete("/:id", TicketController.deleteUser);

// //get a user

// router.get("/", TicketController.getAUser);

export default router;
