import TicketModel from "../../models/Ticket.js ";
import UserModel from "../../models/User.js ";
export default {
  createTicket: async (req, res) => {
    //  use the Model
    const newTicket = new TicketModel({
      user: req.user.id,
      desc: req.body.desc,
    });
    // save the modle data into the database
    newTicket
      .save()
      .then((ticket) => {
        res.status(200).json(ticket);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  //Update  ticket
  updateTicket: async (req, res) => {
    try {
      // this step check is finished in the passport.js
      // 1.confirm the user id first from the req.id; 2. confirm the ticket id again ; 3. process the ticket change

      // const user = await UserModel.findById(req.user.id);// here find a documentation

      // // console.log(user.id)// req .id not the id from the database
      // if (!user) {
      //   res.status(501)
      //   throw new Error("no user found");
      // }

      const ticket = await TicketModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
          // username: req.body.username,
          // email: req.body.email,
          // desc: req.body.desc,
        },
        { upsert: true, setDefaultsOnInsert: true, new: true }
      );
      // [yup this looks like a confirmed bug:]
      // https://github.com/Automattic/mongoose/issues/5455
      // console.log(req.params.id);
      res.status(200).json(ticket);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //delete user
  deletetTicket: async (req, res) => {
    // if (req.body.userId === req.params.id || req.body.isAdmin) {
    //   try {
    //     const user = await User.findOneAndDelete(req.params.id);
    //     res.status(200).json("Acccount has been deleted");
    //   } catch (err) {
    //     return res.status(500).json(err);
    //   }
    // } else {
    //   return res.status(403).json("You can only delete your account");
    // }
  },

  //get a user

  getATicket: async (req, res) => {
    // ticket details content only the ticket creater can view it
    // verifiy the user login, then go to the ticket id

    const ticketDetails = await TicketModel.findById(req.params.id);
    if (!ticketDetails) {
      res.status(404).json({ msg: "no ticket details found" });
    }

    res.status(200).json(ticketDetails);
  },

  // get all ticket
  getAuserAllTicket: async (req, res) => {
    const data = await TicketModel.find({ user: req.user.id });

    // use the req.id to qury all the ticket
    if (!res) {
      res.status(403).json({ msg: "no user found" });
    }

    res.status(200).json(data);
  },
};
