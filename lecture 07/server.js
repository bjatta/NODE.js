/**
 * Created by Bjatta on 01.05.2017 at 14:26.
 */
;(() => {
    "use strict";
    let http    = require('http');
    let router  = require('./router');
    let about   = require('./src/about');
    let root    = require('./src/root');
    let main    = require('./src/main');

// Handle your routes here, put static pages in ./public and they will server
    router.register('/', root.root);
    router.register('/main', main.main);
    router.register('/about', about.about);

    // We need a server which relies on our router
    let server = http.createServer(function (req, res) {
        let handler = router.route(req);
        handler.process(req, res);
    });

// Start it up
    server.listen(80);
    console.log('Server running');
})();