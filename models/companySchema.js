const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  companyName: { 
    type: String, 
    required: true 
  },
  companyCity: { 
    type: String, 
    required: true 
  },
  companyLocation: { 
    type: String, 
    required: true 
  },
  companyPic: { 
    type: String, 
    required: true 
  },
  isActive: { 
    type: String, 
    default: true 
  },
});
companySchema.set("timestamps", true);

module.exports = mongoose.model("company", companySchema);
