const express = require("express");
const router = express.Router();
const ResumeController = require("../controllers/ResumeController");

router.post("/basicInfo", ResumeController.getBasicInfo);

module.exports = router;
