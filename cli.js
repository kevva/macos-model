#!/usr/bin/env node
'use strict';
const meow = require('meow');
const macosModel = require('./');

meow({
	help: [
		'Example',
		'  $ macos-model',
		'  MacBook Pro (Retina, 15-inch, Mid 2014)'
	]
});

macosModel().then(console.log);
