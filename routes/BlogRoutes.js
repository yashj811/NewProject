const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/BlogController");
const auth = require("../middlewares/Auth");

// router.get();
router.post("/create", auth, BlogController.createBlog);
router.get("/blogs", auth, BlogController.getAllBlogs);

module.exports = router;
