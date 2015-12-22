var express = require('express');
var router = express.Router();


// modules
router.use('/users',require('./users'));
router.use('/home',require('./home'));
module.exports = router;
