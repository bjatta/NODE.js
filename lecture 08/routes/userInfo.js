let express = require('express');
let router = express.Router();
let data    = require('../data/data');

/* GET user listing. */
router.get('/', function(req, res, next) {
    let urlParse = req.originalUrl.split('/');
    let username = urlParse.length?urlParse[urlParse.length-1]:'anonymous';
    let user     = data.getUser(username);
    console.log(user);
    res.render('user-info', {
        title: username || data.getMenuTitle('/users'),
         menu: data.menu(),
         bUrl: user.name === 'anonymous'
                    ?'/images/background/anonymous.jpg'
                    :'/images/background/users.png',
  mainContent: 'About '+username+': '
                + user.name === 'anonymous'
                            ?' not found and stay anonymous'
                            :user.name,
         user: user,
    });
});

module.exports = router;