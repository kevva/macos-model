# osx-model [![Build Status](https://travis-ci.org/kevva/osx-model.svg?branch=master)](https://travis-ci.org/kevva/osx-model)

> Get your Mac model


## Install

```
$ npm install --save osx-model
```


## Usage

```js
var osxModel = require('osx-model');

osxModel(function (err, model) {
	console.log(model);
	//=> 'MacBook Pro (Retina, 15-inch, Mid 2014)'
});
```


## CLI

```
$ npm install --global osx-model
```

```
$ osx-model --help

  Example
    $ osx-model
    MacBook Pro (Retina, 15-inch, Mid 2014)
```


## Related

* [osx-info](https://github.com/gillstrom/osx-info) - Get info about your Mac


## License

MIT © [Kevin Martensson](http://github.com/kevva)
