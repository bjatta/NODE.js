/**
 * Created by Bjatta on 01.05.2017 at 14:27.
 */
;(() => {
    "use strict";
    let handlerFactory = require('./handler');
    let fs = require('fs');
    let parser = require('url');
    let handlers = {};

    exports.clear = function() {
        handlers = {};
    };

    exports.register = function(url, method) {
        handlers[url] = handlerFactory.createHandler(method);
    };

    exports.route = function(req) {
        let url = parser.parse(req.url, true);
        let handler = handlers[url.pathname];
        if (!handler) handler = this.missing(req);
        return handler;
    };

    exports.missing = function(req) {
        let url = parser.parse(req.url, true);
        let path = __dirname + "/public" + url.pathname;
        try {
            let data = fs.readFileSync(path);
            let mime = req.headers.accepts || 'text/html';
            return handlerFactory.createHandler(function(req, res) {
                res.writeHead(200, {'Content-Type': mime});
                res.write(data);
                res.end();
            });
        } catch (e) {
            return handlerFactory.createHandler(function(req, res) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write("No route registered for " + url.pathname);
                res.end();
            });
        }
    }
})();