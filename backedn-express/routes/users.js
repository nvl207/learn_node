var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", function (req, res, next) {
  const data = { message: "this is Post method" };
  res.send(data);
});

module.exports = router;
