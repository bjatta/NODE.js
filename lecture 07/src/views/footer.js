/**
 * Created by Bjatta on 01.05.2017 at 15:45.
 */
;(() => {
    "use strict";
    exports.footer = (res,mime) => {
        mime = mime || 'text/html';

        if (mime.indexOf('text/html') !== -1) {
            res.write(`
<footer class="footer">(c) bj bjatta at 2017 NODE.js ЦОТ</footer>
</body>
</html>`);
        }
        res.end();
    }
})();