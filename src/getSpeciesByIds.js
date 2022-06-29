const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species
  .filter((specie) => ids.some((idAnimal) => idAnimal === specie.id));

module.exports = getSpeciesByIds;
