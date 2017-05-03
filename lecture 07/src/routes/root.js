/**
 * Created by Bjatta on 01.05.2017 at 15:11.
 */
;(() => {
    "use strict";
    let header = require('../views/header.js');
    let footer = require('../views/footer.js');
    exports.root = (req, res) => {
        header.header(res,'/');
        res.write(`
<div class="main-background"
     style="background: url(../img/background/root.png);"></div>
<h3> ROOT site page. all time starts here.</h3>
<!--<img src="../img/1.png">-->
        `);
        footer.footer(res);
    }
})();