module.exports = {
  isRoleUser: async (req, res, next) => {
    console.log(req.user);
    if (req.user && req.user.role === "user") {
      next();
    } else {
      res.sendStatus(403);
    }
  },
};
