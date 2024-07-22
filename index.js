const express = require("express");
const bcrypt = require('bcrypt')
const app = express();

app.get("/", (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash("password", salt, (err, hash) => {
      res.send(hash);
    });
  });
});

app.listen(3000, () => {
  console.log("Server is Running On Server http://localhost:3000");
});
