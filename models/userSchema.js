const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
    },

    userEmail: {
        type: String,
        require: true,
    },
    userPassword: {
        type: String,
        require: true,
    },
    userPhoneNo: {
        type: Number,
        require: true,
    },
    userCity: {
        type: String,
        require: true,
    },
    userState: {
        type: String,
        require: true,
    },
    userRole: {
        type: String,
        require: true,
    },
    isActive: {
        type: String,
        require: true,
    },
})
userSchema.set("timestamps", true);
module.exports = mongoose.model("user", userSchema);