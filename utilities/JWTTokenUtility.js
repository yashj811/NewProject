const jwt = require("jsonwebtoken");

const JWT_KEY = process.env.JWT_KEY.replace(/\\n/gm, "\n");

exports.signToken = (email, password) => {
  const data = {
    email: email,
    password: password,
    iat: Math.floor(new Date() / 1000),
  };
  return new Promise((resolve, reject) => {
    jwt.sign(data, JWT_KEY, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
};
