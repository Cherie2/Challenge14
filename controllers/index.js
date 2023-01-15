const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');
const dashRoutes = require('./dashRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', apiRoutes);

module.exports = router;
