const fs = require('fs');
const { verifyToken } = require('./jwt');
const { user } = require('../models');

const authenticate = (req, res, next) => {
  try {
    const token = fs.readFileSync('./access_token.csv', 'utf-8');
    const { id, email } = verifyToken(token);
    user.findOne({ where: { id, email }})
      .then((data) => {
        if (data) next()
        else res.redirect('/login')
      })
      .catch(err => res.status(400).json(err))
  } catch (error) {
    res.redirect('/login')
    res.status(401).json({ message: error.message })
  }
}

module.exports = { authenticate }