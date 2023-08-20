const jwt = require("jsonwebtoken");

const userAuthentication = async (req, res, next) => {
  const authHeader = req.headers.Authorization || req.headers.authorization;
  //console.log(req.headers);
  console.log("authHeader :", authHeader);
  if (authHeader && authHeader.startsWith("Bearer")) {
    let token = authHeader.split(" ")[1]; //! [1] esliye likha hai kyuki [o] pr 'Bearer' hota hai or [1] pr token no. hota hai
    //console.log('token :', token)
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401).json({
          success: false,
          message: "User is not authorize",
        });
      } else {
        req.user = decoded.userData;
        console.log(decoded.userData); // Log in user Details , Decode this value...
        next();
      }
    });
  } else {
    res.status(409).json({
      success: false,
      message: "Token Not Found",
    });
  }
};

module.exports = {
  userAuthentication,
};
