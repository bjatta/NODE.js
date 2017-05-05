let express = require('express');
let router  = express.Router();
let data    = require('../data/data');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: data.getMenuTitle('/'),
    menu : data.menu(),
  });
});

module.exports = router;