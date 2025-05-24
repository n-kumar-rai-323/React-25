require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expressRateLimit = require("express-rate-limit");

const helmet = require("helmet");

const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.use(cors({ origin: "*" }));

app.use(
  expressRateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 30,
  })
);

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRoute = require("./router");
// import indexRoute from "./router/index.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/ecom")
  .then(() => {
    console.log("Database Connection successfully");
  })
  .catch((err) => console.log(err));

app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`Application Running ${PORT}`);
});
