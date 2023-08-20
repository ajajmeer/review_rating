const express = require("express");
const multer=require('multer')

const user = require("../controllers/userController");
const {
  registerUserValidation,
  logInUserValidation,
  sendUserPasswordEmailValidation,
  resetPasswordValidation,
} = require("../validations/user/userDataValidation");
const { userAuthentication } = require("../middlewares/authToken");
const { userUpload } = require("../middlewares/userImageStorage");

const userRouter = express.Router();

userRouter.post(
  "/create",
  userUpload.single("profilePic"),
  registerUserValidation,
  user.createUser
);
userRouter.post("/login", logInUserValidation, user.userLogIn);
userRouter.get("/check", userAuthentication, user.checkToken);
userRouter.post(
  "/resetpasswordemail",
  sendUserPasswordEmailValidation,
  user.sendUserPasswordEmail
);
userRouter.post(
  "/resetpassword/:id/:token",
  resetPasswordValidation,
  user.resetPassword
);

module.exports = userRouter;
