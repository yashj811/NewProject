const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const AuthRoutes = require("./routes/AuthRoutes");
const CryptoRoutes = require("./routes/CryptoRoutes");
const ResumeRoutes = require("./routes/ResumeRoutes");

const app = express();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/v0", AuthRoutes);
app.use("/v0", CryptoRoutes);
app.use("/v0", ResumeRoutes);

app.listen(PORT, () => {
  console.log(`Connected on port : ${PORT}`);
});
