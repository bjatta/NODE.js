/**
 * Created by Bjatta on 01.05.2017 at 15:11.
 */
;(() => {
    "use strict";
    exports.main = (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
<!DOCTYPE \"html\">
<html>
    <head>
        <title>ABOUT</title>
        <link rel="shortcut icon" type="image/png" href="favicon.png">
    </head>
    <body>
        <h3> route /main</h3>
    all about US!
    </body>
</html>`);
        res.end();
    }
})();