/**
 * Created by Bjatta on 01.05.2017 at 15:58.
 */
;(() => {
    "use strict";
    let data = require('../data/data.js');
exports.menu=(res,active)=>{
    let menu = data.menu();
    console.log(res);
    res.write(`
<section class="nav">
    <ol class="menu">
    `);
    let active_class = '';
    for (let i=0;i<menu.length;i++){
        i==active?active_class=' active':active_class = '';
        res.write(`
<li class="menu-item${active_class}">
    <a href="${menu[i].href}">${menu[i].title}</a>
</li>
`);
    }
    res.write(`
    </ol>
</section>    
    `);
}
})();