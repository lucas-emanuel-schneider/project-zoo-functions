const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  const residents = [
    { name: 'Ilana', sex: 'female', age: 11 },
    { name: 'Orval', sex: 'male', age: 15 },
    { name: 'Bea', sex: 'female', age: 12 },
    { name: 'Jefferson', sex: 'male', age: 4 },
  ];
  it('Verifica se a função handlerElephants é uma função:', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica se a função handlerElephants retorna undefined caso nenhum parâmetro for passado', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se a função handlerElephants retorna Parâmetro inválido, é necessário uma string caso parâmetro passado não seja uma string', () => {
    expect(handlerElephants(['dale'])).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se a função handlerElephants recebendo names retorna um array de nomes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se a função handlerElephants recebendo averageAge retorna a media de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Verifica se a função handlerElephants recebendo id retorna o id dos elefantes', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it('Verifica se a função handlerElephants recebendo location retorna a regiao dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se a função handlerElephants recebendo popularity retorna a regiao dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verifica se a função handlerElephants recebendo availability retorna a disponibilidade dos elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se a função handlerElephants recebendo residents retorna um array com elefantes', () => {
    expect(handlerElephants('residents')).toEqual(residents);
  });
  it('Verifica se a função handlerElephants recebendo algo que não seja chave de elefantes retorna null', () => {
    expect(handlerElephants('sex')).toBeNull();
  });
  it('Verifica se a função handlerElephants recebendo count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
});
