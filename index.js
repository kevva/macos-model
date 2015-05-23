'use strict';
var osxInfo = require('osx-info');

module.exports = function (cb) {
	osxInfo(function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, data.name);
	});
};
