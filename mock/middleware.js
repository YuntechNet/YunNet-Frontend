module.exports = (req, res, next) => {
  if (req.method == "POST" && req.path == "/login") {
    if (
      req.body.username === "clooooode" &&
      req.body.password != "" &&
      req.body.recaptcha != ""
    ) {
      res.status(200).json({ token: "Y2xvb29vb2Rl" });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } else {
    next();
  }
};
