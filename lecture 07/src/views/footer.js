/**
 * Created by Bjatta on 01.05.2017 at 15:45.
 */
;(() => {
    "use strict";
    exports.footer = (res) => {
        res.write(`
</body>
</html>`);
        res.end();
    }
})();