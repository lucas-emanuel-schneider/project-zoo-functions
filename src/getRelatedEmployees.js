const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

const isManager = (id) => managers.some((item) => item === id);

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((employ) => employ.managers
    .includes(managerId)).map((names) => `${names.firstName} ${names.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
