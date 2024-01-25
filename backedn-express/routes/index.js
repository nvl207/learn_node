var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // những cái req bằng get thì sẽ vào đây
  res.render("index", { title: "Express" });
});

// ví dụ trang about
router.get("/about", function (req, res, next) {
  // những cái req bằng get thì sẽ vào đây
  res.send("day la trang about OK");
});

router.get("/sendstatus", function (req, res, next) {
  // những cái req bằng get thì sẽ vào đây
  res.sendStatus(200);
});

// ví dụ trang test
router.get("/test/t1", function (req, res, next) {
  // những cái req bằng get thì sẽ vào đây
  res.send("day la trang test OK");
});

// session 2
// thường dùng

router.get("/sentStatus", function (req, res, next) {
  // những cái req bằng get thì sẽ vào đây

  res.status(201).json({ message: "OK" });
});
// dowload
router.get("/file/dowload", (req, res, next) => {
  res.download("public/files/images.jpg");
});

//send file

router.get("/sendFile", (req, res, next) => {
  res.sendFile("public/files/images.jpg", { root: "./" });
});

//json
router.get("/json", (req, res, next) => {
  res.json({ message: "hello Redirect" });
});

//redirect
router.get("/redirect", (req, res, next) => {
  res.redirect("/json");
});

module.exports = router;
