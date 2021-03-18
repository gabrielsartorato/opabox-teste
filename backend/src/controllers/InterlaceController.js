const { InterlaceService } = require('../services/InterlaceService');

class InterlaceController {
  async show(request, response) {
    try {
      const { intervaloA, intervaloB } =
        request.query === {} ? request.query : request.body;

      const interlaceService = new InterlaceService();

      const { interlace, resp } = await interlaceService.excute(
        intervaloA,
        intervaloB,
      );

      return response.json({ interlace, resp });
    } catch (err) {
      return response.json(err.message);
    }
  }
}

module.exports = { InterlaceController };
