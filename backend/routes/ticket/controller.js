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
    try {
      const ticket = await TicketModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
          // username: req.body.username,
          // email: req.body.email,
          // desc: req.body.desc,
        },
        { upsert: true, setDefaultsOnInsert: true,new: true, }
      );
      // [yup this looks like a confirmed bug:]
      // https://github.com/Automattic/mongoose/issues/5455
      console.log(req.params.id);
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
