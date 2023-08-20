const joi = require("joi");

const companySchemaVal = {
  createCompany: joi
    .object({
      companyName: joi
        .string()
        .min(3)
        .max(20)
        .message({
          "string.min": "{#label} should contain at least {#limit} character", //! label = userName dikhayega
        })
        .required(),
      companyCity: joi.string().required(),
      companyLocation: joi.string().required(),
    })
    .unknown(true),
};

module.exports = companySchemaVal;
