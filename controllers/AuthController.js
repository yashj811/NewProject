const {
  getHashedPassword,
  isPasswordMatch,
} = require("../utilities/HashPassword");
const { signToken } = require("../utilities/JWTTokenUtility");
const User = require("../models/UserModel");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Please enter details",
    });
  } else {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "User already exist.Please login.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        success: false,
        message: "Soemthing went wrong.",
      });
    }

    const hashedPassword = await getHashedPassword(password);
    let newUser = new User({ email: email, password: hashedPassword });
    await newUser.save((err, user) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          success: false,
          message: "Please try again later.",
        });
      } else {
        return res.status(200).json({
          status: 200,
          success: true,
          message: "User Registered.",
        });
      }
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Please enter details",
    });
  } else {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "User does not exist. Please register.",
        });
      }

      const isMatch = await isPasswordMatch(password, user.password);
      if (isMatch) {
        const token = await signToken(email, password);
        return res.status(200).json({
          status: 200,
          success: true,
          message: "Logged in.",
          data: { token: token },
        });
      } else {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "Password incorrect. Please try again.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        success: false,
        message: "Something went wrong.",
      });
    }
  }
};
