const fs = require("fs");
const process = require("process");

function cat(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log(`Error finding ${path}: ${err}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

cat("one.txt");
