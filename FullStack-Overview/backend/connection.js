const mongoose = require("mongoose");

main()
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  // replace "mongodb://127.0.0.1:27017/test" with your mongodb atlas URI
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

module.exports = main;
