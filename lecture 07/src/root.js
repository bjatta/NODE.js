/**
 * Created by Bjatta on 01.05.2017 at 15:11.
 */
;(() => {
    "use strict";
    let header = require('./views/header.js');
    let footer = require('./views/footer.js');
    exports.root = (req, res) => {
        header.header(res,'ROOT');
        res.write(`
<section id="#main-container">

</section>        
        `);
        footer.footer(res);
    }
})();