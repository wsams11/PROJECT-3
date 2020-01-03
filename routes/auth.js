const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config");

const requireSignin = function(req, res, next) {
  passport.authenticate("local", { session: false }, function(err, user, info) {
    if (err) return res.status(500).end();
    if (!user) return res.status(401).send(info.message);
    req.user = user;
    next();
  })(req, res, next);
};

const requireAuth = function(req, res, next) {
  passport.authenticate("jwt", { session: false }, function(err, user) {
    if (err) return res.status(500).end();
    if (!user) return res.status(401).json({ message: "Invalid Token" });
    req.user = user;
    next();
  })(req, res, next);
};

const tokenizer = user => {
  return jwt.sign(
    {
      sub: user.id
    },
    config.secret
  );
};

module.exports = {
  requireSignin,
  requireAuth,
  tokenizer
};