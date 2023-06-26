const mongoose = require('mongoose');

let companySchemsSchems = new mongoose.Schema({
    companyName: { type: String, require: true },
    companyLocation:{type:String,require:true},
    companyCity: { type: String, require: true },
    
    isActivate: { type: Boolean, require: true }

})
companySchems.set("timestamps", true);

module.exports = mongoose.model('company', companySchems)