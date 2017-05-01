/**
 * Created by Bjatta on 01.05.2017 at 14:29.
 */
;(() => {
    "use strict";
    exports.createHandler = function (method) {
        return new Handler(method);
    };

    let Handler = function(method) {
        this.process = function(req, res) {
            let params = null;
            return method.apply(this, [req, res, params]);
        }
    }
})();