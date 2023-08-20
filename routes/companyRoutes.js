const express = require("express");

const company = require("../controllers/companyControllers");
const { userAuthentication } = require("../middlewares/authToken");
//const { isRoleUser } = require("../middlewares/authorization");
const {
  createCompanyValidation,
} = require("../validations/company/companyDataVal");
const { companyUpload } = require("../middlewares/companyImageStorage");

const companyRouter = express.Router();

companyRouter.post(
  "/create",
  companyUpload.single("companyPic"),
  userAuthentication,
  createCompanyValidation,
  company.createCompany
);
companyRouter.get("/list", company.companyList);
companyRouter.get("/detail/:id", company.companyDetail);
companyRouter.get("/search/:letter", company.searchCompany);

module.exports = companyRouter;

// isRoleUser, 
