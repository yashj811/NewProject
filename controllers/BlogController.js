const Blog = require("../models/BlogModel");

exports.CreateBlog = async (req, res) => {
  const { blogTitle, blogBody } = req.body;

  if (!blogTitle || !blogBody) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Please enter the details.",
    });
  }

  const newBlog = new Blog({ title: blogTitle, body: blogBody });

  await newBlog.save((err, blog) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        success: false,
        message: "Please try again later.",
      });
    }

    return res.status(201).json({
      status: 201,
      success: true,
      message: "Created successfully.",
      data: blog,
    });
  });
};

exports.getBlog = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res
      .status(400)
      .json({ status: 400, success: false, message: "No data available." });
  }
};
