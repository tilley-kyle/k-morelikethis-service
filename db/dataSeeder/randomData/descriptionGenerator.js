const faker = require('faker');

const descriptionGen = () => {
  const length = Math.floor(Math.random() * 2);
  let description = '';
  for (let i = 0; i < length; i++) {
    description += faker.fake('{{lorem.sentence}}');
  }
  return description;
}

module.exports = descriptionGen;