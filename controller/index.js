const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoute = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoute);

module.exports = router;
