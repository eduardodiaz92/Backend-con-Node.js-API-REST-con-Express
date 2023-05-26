const Joi = require('joi');

const id = Joi.string().uuid();
const category = Joi.string().min(3).max(15);

const createCategorySchema = Joi.object({
  category: category.required(),
});

const updateCategorySchema = Joi.object({
  category: category.required(),
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  getCategorySchema,
  createCategorySchema,
  updateCategorySchema,
};
