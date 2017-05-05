let express = require('express');
let router = express.Router();
let data    = require('../data/data');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: data.getMenuTitle('/main'),
        menu : data.menu(),
        bUrl : '/images/background/main.png',
    });
});

module.exports = router;
