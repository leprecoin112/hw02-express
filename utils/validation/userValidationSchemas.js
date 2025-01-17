const Joi = require("joi");
const addSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const emailSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  addSchema,
  updateSubscriptionSchema,
  emailSchema,
};
