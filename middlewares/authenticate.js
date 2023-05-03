const jwt = require("jsonwebtoken");

const User = require("../models/user");
const HttpError = require("../helpers/HttpError");
const { SECRET_KEY } = process.env;
const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError.UnauthorizedError());
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      next(HttpError.UnauthorizedError());
    }

    if (token !== user.token) {
      next(HttpError.UnauthorizedError());
    }
    req.user = user;
    next();
  } catch {
    next(HttpError.UnauthorizedError());
  }
};

module.exports = authenticate;