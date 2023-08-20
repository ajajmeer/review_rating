const express = require("express");

const userRouter = require("./userRoutes");
const companyRouter = require("./companyRoutes");
const companyReviewRouter = require("./companyReviewRoutes");

const commonRouter = express.Router();

commonRouter.use("/user", userRouter);
commonRouter.use("/company", companyRouter);
commonRouter.use("/companyreview", companyReviewRouter);
module.exports = commonRouter;
