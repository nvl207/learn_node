var express = require("express");
var router = express.Router();
var { write } = require("../helpers/fileHelper");
var fs = require("fs");

const products = require("../data/products.json");
const fileName = "./data/products.json";

/* GET listing. */
router.get("/", function (req, res, next) {
  res.send(products);
});

router.get("/:id", function (req, res, next) {
  const { id } = req.params; // =    const {id} = req.params;

  const found = products.find((p) => {
    return p.id == id;
  });

  if (!found) {
    return res.status(404).json({ message: "Products not found" });
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

  products.push(data); // thêm dữ liệu vào mảng tên là products

  // save to file
  write(fileName, products);

  res.status(201).json({ message: "create product is successful" });
});

// Patch
router.patch("/:id", function (req, res, next) {
  const { id } = req.params;
  const data = req.body;
  console.log("data = ", data);

  // tìm data để sửa
  let found = products.find((p) => {
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
  write(fileName, products);

  res.status(201).json({ message: "create product is successful" });
});

//delete

router.delete("/:id", function (req, res, next) {
  const { id } = req.params; // =    const {id} = req.params;

  const found = products.find((p) => {
    return p.id == id;
  });

  if (!found) {
    return res.status(404).json({ message: "Products not found" });
  }

  let remainProducts = products.filter((p) => {
    return p.id != id;
  });
  // save to file
  write(fileName, products);

  res.sendStatus(200);
});

module.exports = router;
