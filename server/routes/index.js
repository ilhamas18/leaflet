const router = require('express').Router();
const UserRoutes = require('./userRoutes');
const CatalogRoutes = require('./catalogRoutes');
const { authenticate } = require('../middlewares/auth');

router.use(UserRoutes);
router.use(authenticate)
router.use(CatalogRoutes);

module.exports = router;