const { unlinkSync } = require("fs");
const userValSchema = require("./userValSchema");

module.exports = {
  registerUserValidation: async (req, res, next) => {
    let isValid = await userValSchema.registerUser.validate(req.body, {
      aboutEarly: false,
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

  logInUserValidation: async (req, res, next) => {
    let isValid = await userValSchema.logInUser.validate(req.body, {
      aboutEarly: false,
    });
    if (isValid.error) {
      res.status(403).json({
        success: false,
        message: isValid.error.details[0].message,
      });
    } else {
      next();
    }
  },

  sendUserPasswordEmailValidation: async (req, res, next) => {
    let isValid = await userValSchema.sendUserPasswordEmail.validate(req.body, {
      aboutEarly: false,
    });
    if (isValid.error) {
      res.status(403).json({
        success: false,
        message: isValid.error.details[0].message,
      });
    } else {
      next();
    }
  },

  resetPasswordValidation: async (req, res, next) => {
    let isValid = await userValSchema.resetPassword.validate(req.body, {
      aboutEarly: false,
    });
    if (isValid.error) {
      res.status(403).json({
        success: false,
        message: isValid.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
