/**
 * Created by Bjatta on 01.05.2017 at 15:45.
 */
;(() => {
    "use strict";
    let menu = require('./menu.js');
    exports.header = (res,title,menuItemIndex) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
<!DOCTYPE \"html\">
<html>
    <head>
        <title>${title}</title>
        <link rel="shortcut icon" type="image/png" href="/img/favicon.png">
        <link rel="stylesheet" type="text/css" href="css/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Noticia+Text" rel="stylesheet">
    </head>
    <body>`);
    menu.menu(res,menuItemIndex);
    }
})();