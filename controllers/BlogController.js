const Blog = require("../models/BlogModel");

exports.createBlog = async (req, res) => {
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

exports.getAllBlogs = async (req, res) => {
  let limit =
    req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page);
      page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  try {
    const data = await Blog.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
    return res.status(200).json({ status: 200, success: true, data: data });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Please try again later.",
    });
  }
};

exports.getBlog = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res
      .status(400)
      .json({ status: 400, success: false, message: "No data available." });
  }
};
