const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello from ecom updated");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
