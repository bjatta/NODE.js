let express = require('express');
let router = express.Router();
let data    = require('../data/data');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: data.getMenuTitle('/about'),
        menu : data.menu(),
        bUrl : '/images/background/about.png',
    });
});

module.exports = router;
