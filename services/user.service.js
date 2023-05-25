const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class UserServices {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.string.uuid(),
        user: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  async create(data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  async find() {
    return this.users;
  }

  async findOne(id) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    if (user.isBlock) {
      throw boom.conflict('blocked user');
    }
    return user;
  }

  async update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('user not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('user not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UserServices;
