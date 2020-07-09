const express = require('express');
const publicRouter = require('./public');
const privateRouter = require('./private');
const router = express.Router();
router.use('/public', publicRouter);
router.use('/private', privateRouter);

module.exports = router;