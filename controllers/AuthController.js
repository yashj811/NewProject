exports.register = (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Please enter details",
    });
  } else {
    res.status(200).json({
      status: 200,
      success: true,
      message: "Hello there",
      data: { email: email, password: password },
    });
  }
};
