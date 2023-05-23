const { faker } = require('@faker-js/faker');
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
  create(data) {
    const newCategory = {
      id: faker.string.uuid(),
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }
  find() {
    return this.categories;
  }
  findOne(id) {
    return this.categories.find((array) => array.id === id);
  }
  update(id, changes) {
    const index = this.categories.findIndex((array) => array.id === id);
    if (index === -1) {
      throw Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes,
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}
module.exports = CategoriesServices;
