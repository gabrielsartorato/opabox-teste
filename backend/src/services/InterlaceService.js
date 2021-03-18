class InterlaceService {
  excute(intervaloA, intervaloB) {
    let interlace;
    let resp;

    if (!intervaloA || !intervaloB) {
      throw new Error('Ambas intervalos devem ser preenchidos');
    }

    if (typeof intervaloA === 'string') {
      intervaloA = intervaloA.split(',').map((inter) => inter.trim());
      intervaloB = intervaloB.split(',').map((inter) => inter.trim());
    }

    const inicioIntervaloA = intervaloA[0];
    const fimIntervaloA = intervaloA[1];
    const inicioIntervaloB = intervaloB[0];
    const fimIntervaloB = intervaloB[1];

    if (fimIntervaloB < inicioIntervaloA || fimIntervaloA < inicioIntervaloB) {
      interlace = false;
      resp = 'Não';
      return {
        resp,
        interlace,
      };
    }
    if (
      inicioIntervaloA >= fimIntervaloB ||
      inicioIntervaloB >= fimIntervaloA
    ) {
      interlace = true;
      resp = 'Sim';
      return {
        resp,
        interlace,
      };
    }
    if (fimIntervaloA >= inicioIntervaloB) {
      interlace = true;
      resp = 'Sim';
      return {
        resp,
        interlace,
      };
    }
  }
}

module.exports = {
  InterlaceService,
};
