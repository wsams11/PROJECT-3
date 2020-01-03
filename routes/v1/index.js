const router = require("express").Router();
const { requireAuth } = require("../auth");

router.get("/protected", requireAuth, function(req, res) {
  res.json({
    message: "You have been protected!"
  });
});

router.use("/user", require("./user"));

module.exports = router;