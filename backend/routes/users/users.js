import express from "express";
import { authJwt } from "../middleware/passport.js";
import UserController from "./controller.js";
const router = express.Router();

//Update  user
router.put("/:id", UserController.updateUser);

//delete user
router.delete("/:id", UserController.deleteUser);

//get a user

router.get("/", authJwt, UserController.getAUser);

//getFriends

router.get("/friends/:userId", UserController.getFriends);

//follow a user
router.put("/:id/follow", UserController.followUser);

//unfllow a user
router.put("/:id/unfollow", UserController.unfllowUser);

// // define the home page route
// router.get('/', function (req, res) {
//   res.send('it is the user route')
// })

export default router;
