const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(``);
  })
  .catch((err) => console.log(``));

// Middleware
const middleware = (req, res, next) => {
  console.log(`Hello my Middleware`);
  next();
};

app.get("/", (req, res) => {
  res.send("Welcome to my Node.js application!");
});

app.get("/about", (req, res) => {
  res.send("This is a simple Node.js application with routing.");
});

app.get("/contact", (req, res) => {
  res.send("You can contact us at contact@example.com");
});

app.listen(3000, () => {
  console.log(`Server is running at port no 3000`);
});
