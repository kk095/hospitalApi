const mongoose = require("mongoose");
// to connect mongoose with our project
main()
  .then(() => console.log("mongoose successfully connected!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://kk095:Krishankant$095@cluster0.hoemh3q.mongodb.net/products"
  );
}
