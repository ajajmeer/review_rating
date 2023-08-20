const { unlinkSync } = require("fs");
const companySchema = require("../models/companySchema");
const companyReviewSchema = require('../models/companyReviewSchema')

module.exports = {
  createCompany: async (req, res) => {
    try {
      const newCompany = new companySchema(req.body);
      newCompany.companyName = req.body.companyName
        .trim()
        .split(" ") //! single string ko array me convert kr diya
        .map((data) => {
          return data.charAt(0).toUpperCase() + data.slice(1);
        })
        .join(" "); //! dubara string me change kr diya
      console.log(newCompany.companyName);
      const checkCompany = await companySchema.findOne({
        companyName: req.body.companyName,
      });
      if (checkCompany != null) {
        req.file ? unlinkSync(req.file.path) : null; //! ager same  name ka username profile pic upload krne
        res.status(409).json({
          success: false,
          message: `This company Already Exists`,
        });
      } else {
        const filePath = `/uploads/company${req.file.filename}`;
        newCompany.companyPic = filePath;
        const company = await newCompany.save();
        res.status(201).json({
          success: true,
          message: "Company Created",
          addedCompany: company,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: `Error occur : ${error.message}`,
      });
    }
  },

  companyList: async (req, res) => {
    try {
      const showAllCompanies = await companySchema.find(
        {},
        { companyName: 1, _id: 0 }
      );
      const totalCompanies = await companySchema.find().count();
      res.status(200).json({
        success: true,
        message: "All companies",
        count: totalCompanies,
        companyList: showAllCompanies,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: `Error occur : ${error.message}`,
      });
    }
  },

  companyDetail: async (req, res) => {
    companyID = req.params.id;
    userID = req.params.user;
    try {
      const companyData = await companySchema.findById(req.params.id);
      const reviewDataList = await companyReviewSchema
        .find({ companyID: req.params.id })
        .populate({ path: "userID", select: "userName profilePic" });
      res.status(200).json({
        success: true,
        message: "Review List fetched successfully",
        company: companyData,
        reviewList: reviewDataList,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: `Review Not Found ${error.message}`,
      });
    }
  },

  searchCompany: async (req, res) => {
    const { letter } = req.params;
    try {
      const companies = await companySchema.find({
        companyName: { $regex: `^${letter}`, $options: "i" },
      });
      console.log(companies);
      if (companies.length > 0) {
        res.status(200).json({
          success: true,
          message: "Searched Companies",
          companies: companies,
        });
      } else {
        res.status(403).json({
          success: false,
          message: `No Company found`,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: `Error Occur ${error.message}`,
      });
    }
  },
};
