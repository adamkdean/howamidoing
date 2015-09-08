'use strict';

var optimist = require('optimist').argv,
    pkg = require('../package.json'),
    exec = require('child_process').exec;

function howamidoing () {
    if (optimist.version) {
        console.log(pkg.version);
        process.exit(0);
    }

    exec("df -i | sed -n 2p | awk '{ print $5 }'", function (error, stdout, stderr) {
        console.log('inode used: %s\%', stdout);
    });
}

module.exports = exports = howamidoing;
