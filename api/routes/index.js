var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/* GET home page. */
router.get('/', controllers.index);

router.get('/cars', controllers.getAllCars);

module.exports = router;
