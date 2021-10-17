const express = require("express");
const router = express.Router();
const CryptoController = require("../controllers/CryptoController");
const auth = require("../middlewares/Auth");

router.get("/crypto", auth, CryptoController.getCrypto);

module.exports = router;
