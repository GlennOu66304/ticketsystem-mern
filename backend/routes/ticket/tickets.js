import express from "express";
import { authJwt } from "../middleware/passport.js";
import TicketController from "./controller.js";

const router = express.Router();

// test route
router.get("/", (req, res) => {
  res.send("this is the ticket route");
});

//Create a Ticket
router.post("/", authJwt, TicketController.createTicket);

//Update  a ticket
router.put("/:id", authJwt, TicketController.updateTicket);
// get a ticket 
router.get("/:id", authJwt, TicketController.getATicket);
// get tickets under this user
router.get("/list", authJwt, TicketController.getAuserAllTicket);
// //delete user
// router.delete("/:id", TicketController.deleteUser);

// //get a user

// router.get("/", TicketController.getAUser);

export default router;
