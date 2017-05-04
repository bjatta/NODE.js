/**
 * Created by Bjatta on 01.05.2017 at 15:45.
 */
;(() => {
    "use strict";
    let menu = require('./menu.js');
    let data = require('../data/data');
    exports.header = (res,url) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
<!DOCTYPE "html">`);
        res.write(`    
<html>
    <head>
        <meta charset="UTF-8">
        <title>${data.getMenuTitle(url)}</title>
        <link rel="shortcut icon" type="image/png" href="../img/favicon.png">
        <link rel="stylesheet" type="text/css" href="../css/styles.css">
        <link rel="stylesheet" type="text/css" href="../css/hover-min.css">
        <link href="https://fonts.googleapis.com/css?family=Noticia+Text" rel="stylesheet">
    </head>
    <body>
<section class="header">    
    `);
        menu.menu(res, url);
        res.write(`
</section>
        `);
        res.write(`
<div class="main-background"></div>
<section id="main-container">
`);
    }
})();