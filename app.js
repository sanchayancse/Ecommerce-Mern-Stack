const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

require("dotenv").config();

// import routes
const userRoute = require('./routes/user')

//app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Db Connected"));


// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// routes middleware
app.use("/api",userRoute)



const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
