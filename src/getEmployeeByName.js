const data = require('../data/zoo_data');
// const { species } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  return data.employees
    .find((employ) => employ.firstName === employeeName || employ.lastName === employeeName);
}

module.exports = getEmployeeByName;
