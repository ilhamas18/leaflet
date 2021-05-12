const router = require('express').Router();
const Controller = require('../controllers/catalogController');

router.get('/', Controller.getHotels);

module.exports = router;