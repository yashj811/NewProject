const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const AuthRoutes = require("./routes/AuthRoutes");
const CryptoRoutes = require("./routes/CryptoRoutes");
const ResumeRoutes = require("./routes/ResumeRoutes");
const BlogRoutes = require("./routes/BlogRoutes");

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
app.use("/v0/blog", BlogRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  mongoose.connect(
    DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to db...");
      console.log(`Connected on port : ${PORT}`);
    }
  );
});
