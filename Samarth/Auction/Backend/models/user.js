const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: String, required: true },
  minAmount: { type: String, required: true },
  maxAmount: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "5d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);
const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email "),
    password: passwordComplexity().required().label("Password"),
    address: Joi.string().required().label("Address"),
    date: Joi.string().required().label("Date"),
    minAmount: Joi.string().required().label("minAmount"),
    maxAmount: Joi.string().required().label("maxAmount"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
