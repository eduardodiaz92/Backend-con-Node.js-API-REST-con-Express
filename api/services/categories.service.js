const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class CategoriesServices {
  constructor() {
    this.categories = [];
    this.generate();
  }
  generate() {
    const limit = 5;

    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.string.uuid(),
        category: faker.commerce.productAdjective(),
      });
    }
  }
  async create(data) {
    const newCategory = {
      id: faker.string.uuid(),
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }
  async find() {
    return this.categories;
  }
  async findOne(id) {
    const category = this.categories.find((array) => array.id === id);
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category;
  }
  async update(id, changes) {
    const index = this.categories.findIndex((array) => array.id === id);
    if (index === -1) {
      throw boom.notFound('category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes,
    };
    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}
module.exports = CategoriesServices;
