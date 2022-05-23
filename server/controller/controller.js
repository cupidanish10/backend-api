const userFields = require("../model/userModel");

const newApp = function (req, res) {
  res.send("If you are seeing this your backend is running");
};

const getRegisterPage = function (req, res) {
  res.send("Register Page...");
};

const getData = async function (req, res) {
  try {
    let { username, email, password } = req.body;

    // let newPost = userFields({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: req.body.password,
    // });

    let newPost = userFields({
      username,
      email,
      password,
    });

    let result = await newPost.save();

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { newApp, getData, getRegisterPage };
