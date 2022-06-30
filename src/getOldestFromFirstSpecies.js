const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAni = data.employees.find((person) => person.id === id).responsibleFor[0];
  const objAnimal = data.species.find((bicho) => bicho.id === firstAni);
  return objAnimal.residents.reduce((acc, resident) => {
    if (resident.age > acc[2]) {
      acc[0] = resident.name;
      acc[1] = resident.sex;
      acc[2] = resident.age;
      return acc;
    }
    return acc;
  }, [0, 0, 0]);
}

module.exports = getOldestFromFirstSpecies;
