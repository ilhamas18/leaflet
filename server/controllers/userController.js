const fs = require('fs');
const { user } = require('../models');
const { generateToken } = require('../middlewares/jwt');

class Controller {
  static loginPage(req, res) {
    res.render('login');
  }

  static login(req, res) {
    const { email, password } = req.body;
    user.findOne({ where: { email }})
      .then(user => {
        if (user) {
          if (password == user.dataValues.password) {
            const token = generateToken({ id: user.id, email: user.email }, process.env.JWT_SECRET);
            res.redirect('/')
            fs.writeFileSync("./access_token.csv", token);
          } else {
            res.status(400).json({ message: 'invalid email or passowrd '});
          }
        } else {
          res.status(400).json({ message: 'please input email or password' });
        }
      })
      .catch(err => {
        if (err.msg) {
          res.status(401).json({ message: err.msg });
        } else {
          res.status(500).json({ message: 'internal server error' });
        }
      })
  }
}

module.exports = Controller;