const companyReviewSchema = require("../models/companyReviewSchema");

module.exports = {
  createReview: async (req, res) => {
    const reviewData = new companyReviewSchema(req.body);
    try {
      await reviewData.save();
      res.status(201).json({
        success: true,
        message: "Review Added Successfully",
        review: reviewData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: `error occur ${error.message}`,
      });
    }
  },

  updateReview: async (req, res) => {
    const reviewID = req.params.id;
    try {
      const updatedData = await companyReviewSchema.findByIdAndUpdate(
        reviewID,
        req.body,
        { new: true }
      );
      console.log(updatedData);
      res.status(201).json({
        success: true,
        message: "Review Updated Successfully",
        updatedReview: updatedData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: `error occur ${error.message}`,
      });
    }
  },

  deleteReview: async (req, res) => {
    const reviewID = req.params.id;
    try {
      const deleteData = await companyReviewSchema.findByIdAndDelete(reviewID);
      res.status(204).json({
        success: true,
        message: "Review Deleted Successfully",
        deletedData: deleteData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: `error occur ${error.message}`,
      });
    }
  },
};
