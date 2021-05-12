const { catalog } = require('../models');

class Controller {
  static getHotels(req, res) {
    catalog.findAll()
      .then((data) => {
        res.render('hotels', { data });
      })
      .catch((err) => {
        res.send(err.message)
      })
  }
}

module.exports = Controller;