const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = ({ child: 0, adult: 0, senior: 0 });
  entrants.reduce((acc, person) => {
    if (person.age < 18) acc.child += 1;
    if (person.age >= 18 && person.age < 50) acc.adult += 1;
    if (person.age >= 50) acc.senior += 1;
    return acc;
  }, result);
  return result;
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  return (child * 20.99) + (adult * 49.99) + (senior * 24.99);
}

module.exports = { calculateEntry, countEntrants };
