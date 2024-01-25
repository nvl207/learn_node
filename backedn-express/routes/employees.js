var express = require("express");
var router = express.Router();
var { write } = require("../helpers/fileHelper");
var fs = require("fs");

const employees = require("../data/employees.json");
const fileName = "./data/employees.json";

/* GET listing. */
router.get("/", function (req, res, next) {
  res.send(employees);
});

router.get("/:id", function (req, res, next) {
  const { id } = req.params; // =    const {id} = req.params;

  const found = employees.find((p) => {
    return p.id == id;
  });

  if (!found) {
    return res.status(404).json({ message: "employees not found" });
  }

  res.send(found);
});

// Get many params

router.get("/:id/:name/:price", function (req, res, next) {
  const { id, name, price } = req.params;
  res.send("okk");
});

// Get
router.get("/test", function (req, res, next) {
  res.send("ok");
});

// Post
router.post("/", function (req, res, next) {
  const data = req.body; // biến data lấy dữ liệu gửi lên từ body thông qua yêu cầu POST
  console.log("data = ", data); // req.body chứa dữ liệu được gửi lên từ client

  employees.push(data); // thêm dữ liệu vào mảng tên là employees

  // save to file
  write(fileName, employees);

  res.status(201).json({ message: "create employees is successful" });
});

// Patch
router.patch("/:id", function (req, res, next) {
  const { id } = req.params;
  const data = req.body;
  console.log("data = ", data);

  // tìm data để sửa
  let found = employees.find((p) => {
    // chuyển thành let để có thể sửa biến found
    return (p.id = id);
  });

  // cập nhật data là gì
  if (found) {
    for (let x in found) {
      if (data[x]) {
        found[x] = data[x];
      }
    }
  }

  // save to file
  write(fileName, employees);

  res.status(201).json({ message: "create employees is successful" });
});

//delete

router.delete("/:id", function (req, res, next) {
  const { id } = req.params; // =    const {id} = req.params;

  const found = employees.find((p) => {
    return p.id == id;
  });

  if (!found) {
    return res.status(404).json({ message: "employees not found" });
  }

  let remainemployees = employees.filter((p) => {
    return p.id != id;
  });
  // save to file
  write(fileName, employees);

  res.sendStatus(200);
});

module.exports = router;
