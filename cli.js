#!/usr/bin/env node
'use strict';
const meow = require('meow');
const osxModel = require('./');

meow({
	help: [
		'Example',
		'  $ osx-model',
		'  MacBook Pro (Retina, 15-inch, Mid 2014)'
	]
});

osxModel().then(model => console.log(model));
