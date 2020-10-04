const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// app
const app = express();

// db

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Db Connected"));

// routes
app.get("/", (req, res) => {
  res.send("Hello from ecom updated");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
