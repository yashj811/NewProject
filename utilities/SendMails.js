const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
exports.WelcomeMail = async (email, username) => {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    name: testAccount.web,
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const msg = {
    from: '"The Blog App" <theblogapp@test.com>', // sender address
    to: `<${email}>`, // list of receivers
    subject: "New User Registered", // Subject line
    html: `<div><b>Welcome to the blog app ${username}</b></div>`, // html body
  };

  const info = await transporter.sendMail(msg);
  console.log("Message sent: %s", info.response);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
