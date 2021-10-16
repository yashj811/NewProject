exports.getBasicInfo = (req, res) => {
  console.log(req.body);
  res.status(400).json({ success: false, message: "Error" });
};
