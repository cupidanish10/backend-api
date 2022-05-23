const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./server/route/route");
// cors
const cors = require("cors");

// connect database
mongoose
  .connect("mongodb://localhost/ReactCourse", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

// bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors
app.use(cors());

// router => use after bodyparser
app.use("/", router);

app.listen(9090, function () {
  console.log("app is working");
});
