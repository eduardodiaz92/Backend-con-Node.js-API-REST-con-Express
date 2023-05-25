const Joi = require('joi');

const id = Joi.string().uuid();
const user = Joi.string().min(3).max(30);
const email = Joi.string().email();
const avatar = Joi.string().uri();

const createUserSchema = Joi.object({
  user: user.required(),
  email: email.required(),
  avatar: avatar.required(),
});
const updateUserSchema = Joi.object({
  user: user,
  email: email,
  avatar: avatar,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
