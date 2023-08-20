const express = require("express");
const {
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/companyReviewControllers");
const {
  addCompanyReviewDataValidation,
} = require("../validations/companyReview/companyReviewDataVal");

const companyReviewRouter = express.Router();

companyReviewRouter.post("/add", addCompanyReviewDataValidation, createReview);
companyReviewRouter.patch("/update/:id", updateReview);
companyReviewRouter.delete("/delete/:id", deleteReview);

module.exports = companyReviewRouter;
