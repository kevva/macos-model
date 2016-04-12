'use strict';
var test = require('ava');
var osxModel = require('./');

test(function (t) {
	t.plan(1);

	osxModel().then(function (model) {
		t.assert(model, model);
	});
});
