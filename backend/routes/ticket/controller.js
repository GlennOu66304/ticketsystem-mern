import TicketModel from "../../models/Ticket.js ";

export default {
  createTicket: async (req, res) => {
    //  use the Model
    const newTicket = new TicketModel({
      username: req.body.username,
      email: req.body.email,
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
  //Update  user
  updateTicket: async (req, res) => {
    // if (req.body.userId === req.params.id || req.body.isAdmin) {
    //   if (req.body.password) {
    //     try {
    //       const salt = await bcrypt.genSalt(10);
    //       req.body.password = await bcrypt.hash(req.body.password, salt);
    //     } catch (err) {
    //       return res.status(500).json(err);
    //     }
    //   }
    //   try {
    //     const user = await User.findByIdAndUpdate(req.params.id, {
    //       $set: req.body,
    //     });
    //     res.status(200).json("Acccount has been updated");
    //   } catch (err) {
    //     res.status(500).json(err);
    //   }
    // } else {
    //   return res.status(403).json("You can only change your account");
    // }
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
    //   const userId = req.query.userId;
    //   const username = req.query.username;
    //   try {
    //     const user = userId
    //       ? await User.findById(userId)
    //       : await User.findOne({ username: username });
    //     const { password, updatedAt, ...other } = user._doc;
    //     res.status(200).json(other);
    //   } catch (err) {
    //     return res.status(500).json(err);
    //   }
    // },
  },
};
