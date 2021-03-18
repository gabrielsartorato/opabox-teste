class OrderListService {
  async execute(listas) {
    const { salaN, salaS } = listas;

    if (!salaN || !salaS) {
      throw new Error('Ambas as salas devem ser preenchidas');
    }

    const sala1 = salaN
      .split(',')
      .map((num) => num.trim())
      .sort();

    const sala2 = salaS
      .split(',')
      .map((letter) => letter.trim())
      .sort();

    console.log(sala1);

    return {
      salaN: sala1,
      salaS: sala2,
    };
  }
}

module.exports = {
  OrderListService,
};
