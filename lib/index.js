'use strict';

var optimist = require('optimist').argv,
    pkg = require('../package.json');

function healthcheck() {
    if (optimist.version) {
        console.log(pkg.version);
        process.exit(0);
    }

    console.log('error, not implemented');    
}

module.exports = exports = healthcheck;
