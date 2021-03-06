import User from "../../models/User.js ";
import bcrypt from "bcrypt";


export default {
  //Update  user
  updateUser: async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }
      try {
        const user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Acccount has been updated");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can only change your account");
    }
  },

  //delete user
  deleteUser: async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      try {
        const user = await User.findOneAndDelete(req.params.id);
        res.status(200).json("Acccount has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can only delete your account");
    }
  },

  //get a user

  getAUser: async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
      const user = userId
        ? await User.findById(userId)
        : await User.findOne({ username: username });

      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //getFriends

  getFriends: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      const friends = await Promise.all(
        user.followings.map((friendId) => {
          return User.findById(friendId);
        })
      );

      let friendList = [];
      friends.map((friend) => {
        const { _id, username, profilePicture } = friend;
        friendList.push({ _id, username, profilePicture });
      });
      res.status(200).json(friendList);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //follow a user
  followUser: async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (!user.followers.includes(req.body.userId)) {
          await user.updateOne({ $push: { followers: req.body.userId } });
          await currentUser.updateOne({ $push: { followings: req.params.id } });
          res.status(200).json("User already been followed");
        } else {
          return res.status(403).json("You already followed this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can not follow yourself");
    }
  },

  //unfllow a user
  unfllowUser: async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (user.followers.includes(req.body.userId)) {
          await user.updateOne({ $pull: { followers: req.body.userId } });
          await currentUser.updateOne({ $pull: { followings: req.params.id } });
          res.status(200).json("User already been unfollowed");
        } else {
          return res.status(403).json("You don't followed this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can not unfollow yourself");
    }
  },

  // // define the home page route
  // router.get('/', function (req, res) {
  //   res.send('it is the user route')
  // })
};
