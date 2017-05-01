/**
 * Created by Bjatta on 01.05.2017 at 14:41.
 */
;(()=>{
    "use strict";
    exports.about = function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<!DOCTYPE \"html\">");
        res.write("<html>");
        res.write("<head>");
        res.write("<title>ABOUT</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h3> route /about</h3>");
        res.write("all about US!");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
})();