const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, spec) => {
      acc[spec.name] = spec.residents.length;
      return acc;
    }, {});
  }
  if (animal.sex) {
    return data.species
      .find((ani2) => ani2.name === animal.specie).residents
      .filter((mama) => mama.sex === animal.sex).length;
  }
  return data.species.find((ani) => ani.name === animal.specie).residents.length;
}

module.exports = countAnimals;
