/**
 * Created by Bjatta on 01.05.2017 at 15:58.
 */
;(() => {
    "use strict";
    let data = require('../data/data.js');
exports.menu=(res,url,withIcons)=>{
    let menu = data.menu();
    url = url.path || url;
    withIcons = withIcons || false;
    res.write(`
<section class="nav">
    <ol class="menu">
    `);
    let active_class = '';
    for (let i=0;i<menu.length;i++){
        let withIconsString='';
        withIcons?withIconsString='<span class="menu-item-icon">'+menu[i].icon+'</span>':withIconsString='';
        menu[i].href===url?active_class=' active':active_class = ' hvr-wobble-horizontal';
        res.write(`
<li class="menu-item${active_class}">
    <a href="${menu[i].href}">${withIconsString}${menu[i].title}</a>
</li>
`);
    }
    res.write(`
    <li id="menu-item-login" class="menu-item login locked">🔑</li>
    </ol>
</section>    
    `);
}
})();