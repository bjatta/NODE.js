/**
 * Created by Bjatta on 01.05.2017 at 14:27.
 */
;(() => {
    "use strict";
    let handlerFactory = require('./handler');
    let header = require('../views/header');
    let footer = require('../views/footer.js');
    let fs = require('fs');
    let parser = require('url');
    let handlers = {};

    exports.clear = function() {
        handlers = {};
    };

    exports.register = function(url, method) {
        handlers[url] = handlerFactory.createHandler(method);
    };

    exports.route = function(req, res) {
        let url = parser.parse(req.url, true);
        let handler = handlers[url.pathname];
        if (!handler) handler = this.missing(req,res);
        return handler;
    };

    exports.missing = function(req,res) {
        let url = parser.parse(req.url, true);
        let path = __dirname + "/../../public" + url.pathname;
        try {
            let data = fs.readFileSync(path);
            let mime = req.headers.accept || 'text/html';
            return handlerFactory.createHandler(function(req, res) {
                header.header(res,url,mime);
                res.write(data);
                footer.footer(res,mime);
            });
        } catch (e) {
            return handlerFactory.createHandler(function(req, res) {
                header.header(res,url,'text/html',404);
//                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write("No route registered for " + url.pathname);
                footer.footer(res,'text/html');
            });
        }
    }
})();