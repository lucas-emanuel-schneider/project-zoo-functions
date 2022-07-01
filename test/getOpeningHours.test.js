const getOpeningHours = require('../src/getOpeningHours');

const objNoParam = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('Verifica se a função getOpeningHours sem receber parâmetros', () => {
    expect(getOpeningHours()).toEqual(objNoParam);
  });
  it('Verifica se ao passar um parâmetro dia incorreto retorna The day must be valid. Example: Monday', () => {
    expect(() => { getOpeningHours('sexta-cheira', '09:00-AM'); }).toThrowError('The day must be valid. Example: Monday');
  });
  it('Verifica se ao passar um parâmetro matutino/vespertino do horário errado lança o erro: The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => { getOpeningHours('Monday', '09:00'); }).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se ao passar um parâmetro de horas errado lança o erro: The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrowError('The hour must be between 0 and 12');
  });
  it('Verifica se ao passar um parâmetro de minutos errado lança o erro: The minutes must be between 0 and 59', () => {
    expect(() => { getOpeningHours('Monday', '12:70-AM'); }).toThrowError('The minutes must be between 0 and 59');
  });
  it('Verifica se ao passar um parâmetro de horas com texto lança o erro: The hours should represent a number', () => {
    expect(() => { getOpeningHours('Monday', '1d:50-AM'); }).toThrowError('The hour should represent a number');
  });
  it('Verifica se ao passar um parâmetro de minutos com texto lança o erro: The minutes should represent a number', () => {
    expect(() => { getOpeningHours('Monday', '12:d0-AM'); }).toThrowError('The minutes should represent a number');
  });
  it('Verifica se passando horário após o fechamento do zoo ele retorna que está fechado', () => {
    expect(getOpeningHours('Saturday', '11:01-PM')).toBe('The zoo is closed');
  });
  it('Verifica se passando horário de funcionamento do zoo ele retorna que está aberto', () => {
    expect(getOpeningHours('Saturday', '11:01-AM')).toBe('The zoo is open');
  });
  it('Verifica se passando horário após o fechamento do zoo ele retorna que está fechado', () => {
    expect(getOpeningHours('Monday', '05:01-AM')).toBe('The zoo is closed');
  });
});
