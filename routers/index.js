const express = require('express');
const publicRouter = require('./public');
const privateRouter = require('./private');
const passport = require('passport');
require('../middlewares/auth/passport');
const router = express.Router();


router.use('/public', publicRouter);
router.use('/private',passport.authenticate('jwt', {session: false}), privateRouter);

module.exports = router;