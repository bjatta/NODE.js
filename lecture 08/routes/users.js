let express = require('express');
let router = express.Router();
let data    = require('../data/data');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: data.getMenuTitle('/users'),
        menu : data.menu(),
        bUrl : '/images/background/users.png',
  mainContent: ' Here will be an all users list. May be anytime later.',
    });
});

module.exports = router;
