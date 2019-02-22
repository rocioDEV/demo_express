const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const router = express.Router();

router.get("/", (req, res) => {
  const user = new User({ name: "Harry", email: "h@potter.com" });
  console.log(user);

  user
    .save()
    .then(() => {
      res.send("Thank you for your registration!");
    })
    .catch(e => {
      res.send("Sorry! Something went wrong.", e);
    });
});

module.exports = router;
