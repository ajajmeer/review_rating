 const userSchema = require("../models/userSchema")


let createUser = async (req, res) => {
    console.log(req.body)
    const userData = new userSchema(req.body);
    try {
        const isUserExist = await userSchema.findOne({
            userEmail: req.body.userEmail,
        });
        if (isUserExist) {
            res.status(401).json({
                success: false,
                message: "User is already registered with this email"
            });

        } else {
            const user = await userData.save();
            res.status(201).json({
                success: true,
                message: "User successfully registered",
                user: user,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error occur ${error.message}`,
        });
    }

    //res.send('Ok')
}


module.exports = {
    createUser
}