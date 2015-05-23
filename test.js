'use strict';
var test = require('ava');
var osxModel = require('./');

test(function (t) {
	t.plan(2);

	osxModel(function (err, model) {
		t.assert(!err, err);
		t.assert(model, model);
	});
});
