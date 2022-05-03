import express from "express";

const router = express.Router();

// data model import
import userController from "../controller/userController.js"; //need to add extension js, other wise will cause the error

// test router:private
router.post("/test",  (req, res) => {
  res.json({ msg: "user route connected" });
});
// register
router.get("/register", userController.register);
// router.get("/:id", PostController.getOnePost);
// //build Post
// router.post("/", authJwt, PostController.buildPost);
// // delete the Post
// router.delete("/:id", authJwt, PostController.deletePost);

export default router;
