const joi = require("joi");

const companyReviewSchemaVal = {
  addReview: joi
    .object({
      companyReviewSubject: joi
        .string()
        .min(3)
        .max(30)
        .message({
          "string.min": "{#label} should contain at least {#limit} character",
          "string.max": "{#label} should not contain more then {#limit} character" //! label = userName dikhayega
        })
        .required(),
      companyReview: joi
      .string()
      .min(3)
      .max(100)
      .message({
        "string.min": "{#label} should contain at least {#limit} character",
        "string.max": "{#label} should not contain more then {#limit} character" //! label = userName dikhayega
      })
      .required(),
      companyReviewRating: joi
        .string()
        .required(),
    })
    .unknown(true),
};

module.exports = companyReviewSchemaVal ;
