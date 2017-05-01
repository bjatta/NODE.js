/**
 * Created by Bjatta on 01.05.2017 at 15:11.
 */
;(() => {
    "use strict";
    let header = require('../views/header.js');
    let footer = require('../views/footer.js');
    exports.root = (req, res) => {
        header.header(res,'ROOT',0);
        res.write(`
<section id="#main-container">
<h3> ROOT site page. all time starts here.</h3>
</section>        
        `);
        footer.footer(res);
    }
})();