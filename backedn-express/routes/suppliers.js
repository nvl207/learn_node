var express = require("express");
var router = express.Router();

const suppliers = require("../data/suppliers.json");

/* GET listing. */
router.get("/", function (req, res, next) {
  res.send(suppliers);
});

// router.post("/", function (req, res, next) {
//   const data = { message: "this is Post method" };
//   res.send(data);
// });

module.exports = router;
