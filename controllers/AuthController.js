const {
  getHashedPassword,
  isPasswordMatch,
} = require("../utilities/HashPassword");
const { signToken } = require("../utilities/JWTTokenUtility");

exports.register = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Please enter details",
    });
  } else {
    const hashedPassword = await getHashedPassword(password);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "User Registered.",
      data: { email: email, password: hashedPassword },
    });
  }
};

exports.login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Please enter details",
    });
  } else {
    const hashedPassword =
      "$2b$06$qWVYtePLfJBOza9pgcDiQe3kW8AJ2Wbhl57aAnwMPY/P0XWEwRslK";
    const isMatch = await isPasswordMatch(password, hashedPassword);
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
  }
};
