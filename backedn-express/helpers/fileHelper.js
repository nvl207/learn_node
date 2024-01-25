var fs = require("fs");

function write(fileName, products) {
  fs.writeFileSync(fileName, JSON.stringify(products), function (err) {
    if (err) {
      throw err;
      console.log("saved!");
    }
  });
}

module.exports = { write };
