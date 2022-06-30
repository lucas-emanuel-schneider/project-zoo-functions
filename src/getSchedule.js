const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const horas = Object.values(hours);
const days = Object.keys(hours);

const empty = (str) => {
  if (!str) {
    return days.reduce((acc, day, i) => {
      if (day === 'Monday') {
        acc[day] = {
          officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
        };
      } else {
        acc[day] = {
          officeHour: `Open from ${horas[i].open}am until ${horas[i].close}pm`,
          exhibition: species.filter((spicie) => spicie.availability
            .includes(day))
            .map((item) => item.name),
        };
      }
      return acc;
    }, {});
  }
};

const verifyDay = (str) => {
  const result = { [str]: empty()[str] };
  return result;
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return empty(scheduleTarget);
  if (!(species.some((specie) => specie.name === scheduleTarget) || days
    .some((dia) => dia === scheduleTarget))) return empty();
  if (days.includes(scheduleTarget)) return verifyDay(scheduleTarget);
  return species.find((spicie) => spicie.name === scheduleTarget).availability;
}

module.exports = getSchedule;
