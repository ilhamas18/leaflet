const router = require('express').Router();
const Controller = require('../controllers/userController');

router.get('/login', Controller.loginPage)
router.post('/login', Controller.login);

module.exports = router;