/**
 * Created by Bjatta on 01.05.2017 at 15:11.
 */
;(() => {
    "use strict";
    let header = require('../views/header.js');
    let footer = require('../views/footer.js');
    exports.root = (req, res) => {
        header.header(res,'/about');
        res.write(`
<section id="#main-container">
<h3> Most humble site page. all awards keep here.</h3>
<img src="./img/1.png">
<img src="./img/2.png">
</section>        
        `);
        footer.footer(res);
    }
})();