const { InterlaceService } = require('../services/InterlaceService');

class InterlaceController {
  async show(request, response) {
    const { intervaloA, intervaloB } = request.query;

    const interlaceService = new InterlaceService();

    const { interlace, resp } = await interlaceService.excute(
      intervaloA,
      intervaloB,
    );

    return response.json({ interlace, resp });
  }
}

module.exports = { InterlaceController };
