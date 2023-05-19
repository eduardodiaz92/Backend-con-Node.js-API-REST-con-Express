const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 5;

  for (let i = 0; i < limit; i++) {
    users.push({
      user: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    });
  }

  res.json(users);
});
module.exports = router;
