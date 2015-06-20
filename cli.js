#!/usr/bin/env node
'use strict';
var meow = require('meow');
var osxModel = require('./');

meow({
	help: [
		'Example',
		'  $ osx-model',
		'  MacBook Pro (Retina, 15-inch, Mid 2014)'
	]
});

osxModel(function (err, model) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(model);
});
