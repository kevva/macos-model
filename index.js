'use strict';
const osxInfo = require('osx-info');

module.exports = () => osxInfo().then(data => data.name);
