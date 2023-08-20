const companySchemaVal = require("./companySchemaVal");
const { unlinkSync } = require("fs");

module.exports = {
  createCompanyValidation: async (req, res, next) => {
    let isValid = await companySchemaVal.createCompany.validate(req.body, {
      isEarly: false,
    });
    if (isValid.error) {
      req.file ? unlinkSync(req.file.path) : null;
      res.status(403).json({
        success: false,
        message: isValid.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
