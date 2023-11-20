const { UserModel } = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { isError } = require("../Midlewares/ErrorHandler");
const {
  passwordValidation,
  emailValidation,
} = require("../Midlewares/Validation");

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!passwordValidation(password) && !emailValidation(email)) {
      return next(isError(503, "Invalid"));
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return next(isError(503, "User not found"));
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return next(isError(503, "Invalid password"))

    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    return res.status(200).json({ message: "Login Successful", token });

  } catch (error) {
    console.log(error);
    return next(isError(501, "Login Failed"));
  }
};

const Signin = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!passwordValidation(password) || !emailValidation(email)) {
      return next(isError(501, "Invalid email or password"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    return res.status(200).json({ message: "Signin Successful" });
  } catch (error) {
    return next(isError(501, { message: "Signin Failed" }));
  }
};

module.exports = { Login, Signin };
