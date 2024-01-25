var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productsRouter = require("./routes/products");
var employeesRouter = require("./routes/employees");
var suppliersRouter = require("./routes/suppliers");
var nationsRouter = require("./routes/nations");
var customersRouter = require("./routes/customers");

var app = express(); // theo khung của framework của express

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade"); // chưa cần xài

app.use(logger("dev")); // imp logger morgan, set sup ở chế độ dev
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // cho phép mã hóa url sao cho an toàn (dấu cách thành dấu %)
app.use(cookieParser()); // cookie
app.use(express.static(path.join(__dirname, "public"))); // static chứa những file tĩnh, hình ảnh.(dirname: thư mục gốc) quy định thưc mục "public" chứa các file tĩnh

//add CORS here
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", indexRouter); // hệ thống đường dẫn
app.use("/users", usersRouter); // hệ thống đường dẫn
app.use("/products", productsRouter); // hệ thống đường dẫn
app.use("/employees", employeesRouter); // hệ thống đường dẫn
app.use("/suppliers", suppliersRouter); // hệ thống đường dẫn
app.use("/nations", nationsRouter); // hệ thống đường dẫn
app.use("/customers", customersRouter); // hệ thống đường dẫn

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
