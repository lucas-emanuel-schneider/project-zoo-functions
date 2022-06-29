const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, age) => species
  .find((ani) => ani.name === animal).residents.every((t) => t.age >= age);
module.exports = getAnimalsOlderThan;
